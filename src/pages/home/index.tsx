import { Container, Main, Wrapper } from "@app-components";
import { useEffect, useState } from "react";
import { Activity, UserCard } from "./components";
import { assets } from "@app-assets";

export default function Home() {
  const [userData, setUserData] = useState<UserI | null>(null)

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

  const renderUserCard = () => (
    userData?.details && <UserCard user={userData.details} />
  )

  const renderActivities = () => (
    <Wrapper className="flex flex-col gap-6">
      {
        userData?.activities && userData.activities.map((activity, index) => (
          <Activity key={index} activity={activity} />
        ))
      }
    </Wrapper>
  )

  console.log({ userData })

  return (
    <Main className="font-rubik bg-[#0E1323] grid place-items-center px-6 py-[81px]">
      <Container className="flex flex-col w-full gap-4">
        {renderUserCard()}
        {renderActivities()}
      </Container>
    </Main>
  )
}