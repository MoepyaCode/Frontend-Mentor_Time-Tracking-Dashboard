import { assets } from "@app-assets";
import { Wrapper } from "@app-components";

type Props = {
    activity: ActivityI;
}

export function Activity(props: Props) {
    const { activity } = props

    const getImageName = (url: string) => url?.split('/').at(-1)?.slice(0, -4)

    const renderActivityImage = () => (
        <img className="object-contain w-[78px] aspect-square absolute -top-[12px] right-[18px]" src={activity.image} alt={getImageName(activity.image)} />
    )

    const renderActivityDetails = () => (
        <Wrapper className="px-6 py-7 bg-[#1C204B] rounded-t-[15px] text-white flex flex-col gap-[6px] z-[1] " >
            <Wrapper className="flex items-center justify-between">
                <h2 className="font-medium text-[18px]">{activity.title}</h2>

                <button className="cursor-pointer">
                    <img src={assets.iconEllipsis} alt={getImageName(assets.iconEllipsis)} />
                </button>
            </Wrapper>

            <Wrapper className="flex lg:flex-col  items-center lg:items-start justify-between text-[15px]">
                <h3 className="font-light text-[32px] lg:text-[56px]">{activity.timeframes.weekly.previous}hrs</h3>

                <span className="text-[#BBC0FF]">Last Week - 36hrs</span>
            </Wrapper>
        </Wrapper>
    )

    return (
        <Wrapper
            style={{ backgroundColor: activity.color }}
            className={`relative w-full min-h-[160px] lg:max-w-[255px] lg:max-h-[244px] rounded-[15px] flex flex-col justify-end pt-[38px] overflow-hidden`}
        >
            {renderActivityImage()}
            {renderActivityDetails()}
        </Wrapper>
    )
}
