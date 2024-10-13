import { Container, Main, Wrapper } from "@app-components";
import { useEffect, useState } from "react";
import { Activity, UserCard } from "./components";
import { assets } from "@app-assets";

export default function Home() {
  const [userData, setUserData] = useState<UserI | null>(null)
  const [currentTimeFrameView, setCurrentTimeFrameView] = useState<TimeFrame>('weekly')

  useEffect(() => {
    if (userData === null) {
      fetch('/data/data.json')
        .then(response => response.json())
        .then(function (data): UserI {
          return {
            details: {
              fullName: 'Jeremy Robson',
              image: assets.imageJeremy,
            },
            activities: data
          }
        })
        .then(data => setUserData(data))
    }
  }, [userData, setUserData])

  const handleTimeFrameChange = (timeFrame: TimeFrame) => setCurrentTimeFrameView(timeFrame)

  const renderUserCard = () => (
    userData?.details && <UserCard handleTimeFrameChange={handleTimeFrameChange} {...userData.details} currentTimeFrameView={currentTimeFrameView} />
  )

  const renderActivities = () => (
    <Wrapper className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-evenly md:gap-[30px]">
      {
        userData?.activities && userData.activities.map((activity, index) => (
          <Activity {...activity} currentTimeFrameView={currentTimeFrameView} key={index} />
        ))
      }
    </Wrapper>
  )

  return (
    <Main className="font-rubik bg-[#0E1323] grid place-items-center px-6 py-[81px]">
      <Container className="flex flex-col w-full gap-4 max-w-[1110px] md:flex-row md:gap-[30px]">
        {renderUserCard()}
        {renderActivities()}
      </Container>
    </Main>
  )
}