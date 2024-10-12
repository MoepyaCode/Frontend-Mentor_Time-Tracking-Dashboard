import { Wrapper } from "@app-components";
import { timeFrame } from "@app-utils";

type Props = {
    user: ProfileI;
}

export function UserCard(props: Props) {
    const { user } = props

    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

    const renderUserProfile = () => (
        <Wrapper className="bg-[#5747EA] flex items-center px-8 py-[35px] gap-[20px] md:gap-[43px] rounded-[15px] md:flex-col md:items-start md:min-h-[354px]">
            <img className="object-contain w-[64px] md:w-[78px] aspect-square rounded-full border-[3px] border-white" src={user.image} alt={`${user.fullName} image`} />

            <p className="flex flex-col">
                <span className="text-[#BBC0FF] text-[15px]">Report for</span>
                <span className="font-light text-[24px] text-white md:text-[40px]">{user.fullName}</span>
            </p>
        </Wrapper>
    )

    const renderTimeFrameButton = (timeFrame: TimeFrame, key: number) => (
        <button className="flex-grow text-[#7078C9] text-[18px]" key={key}>{capitalize(timeFrame)}</button>
    )

    const renderTimeFrameButtons = () => (
        <Wrapper className="flex py-6 md:flex-col md:items-start md:pl-8 md:gap-[21px]">
            {timeFrame.map(renderTimeFrameButton)}
        </Wrapper>
    )

    return (
        <Wrapper className="bg-[#1C204B] min-h-[203px] rounded-[15px] md:min-w-[255px] max-h-[518px]">
            {renderUserProfile()}
            {renderTimeFrameButtons()}
        </Wrapper>
    )
}
