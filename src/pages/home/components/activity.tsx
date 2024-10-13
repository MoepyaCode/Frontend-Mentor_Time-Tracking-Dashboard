import { Wrapper } from "@app-components";
import { useEffect, useState } from "react";

type Props = {
    [K in keyof ActivityI]: ActivityI[K]
} & {
    currentTimeFrameView: TimeFrame
}

type ViewDataType = PeriodI & {
    active: TimeFrame,
    previousText: string
}

const initState = {
    active: 'weekly' as TimeFrame,
    previousText: 'Last Week'
}

export function Activity(props: Props) {
    const { title, color, currentTimeFrameView, image, timeframes } = props
    const { weekly, daily, monthly } = timeframes
    const [viewData, setViewData] = useState<ViewDataType>({ ...initState, ...timeframes.weekly })

    const getImageName = (url: string) => url?.split('/').at(-1)?.slice(0, -4)

    const renderActivityImage = () => (
        <img className="object-contain w-[78px] aspect-square absolute -top-[12px] right-[18px]" src={image} alt={getImageName(image)} />
    )

    const renderActivityDetails = () => (
        <Wrapper className="px-6 py-7 bg-[#1C204B] rounded-t-[15px] text-white flex flex-col gap-[6px] z-[1] w-full" >
            <Wrapper className="flex items-center justify-between">
                <h2 className="font-medium text-[18px]">{title}</h2>

                <button className="cursor-pointer">
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd" /></svg>

                </button>
            </Wrapper>

            <Wrapper className="flex lg:flex-col  items-center lg:items-start justify-between text-[15px]">
                <h3 className="font-light text-[32px] lg:text-[56px]">{viewData?.current}hrs</h3>

                <span className="text-[#BBC0FF]">{viewData.previousText} - {viewData?.previous}hrs</span>
            </Wrapper>
        </Wrapper>
    )

    useEffect(() => {
        switch (currentTimeFrameView) {
            case 'daily':
                setViewData({
                    active: 'daily',
                    previousText: 'Yesterday',
                    ...daily
                })
                break;
            case 'weekly':
                setViewData({
                    active: 'weekly',
                    previousText: 'Last Week',
                    ...weekly
                })
                break;
            case 'monthly':
                setViewData({
                    active: 'monthly',
                    previousText: 'Last Month',
                    ...monthly
                })
                break;
        }
    }, [currentTimeFrameView, weekly, daily, monthly])


    return (
        <Wrapper
            style={{ backgroundColor: color }}
            className={`relative w-full min-h-[160px] lg:max-w-[255px] lg:max-h-[244px] rounded-[15px] flex flex-col justify-end pt-[38px] overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out cursor-default`}
        >
            {renderActivityImage()}
            {renderActivityDetails()}
        </Wrapper>
    )
}
