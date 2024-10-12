

declare interface UserI {
    details: ProfileI;
    activities: ActivityI[];
}

interface ProfileI {
    fullName: string;
    image: string;
}

declare interface ActivityI {
    title: string;
    timeframes: TimeFrameType;
    color: string;
    image: string;
}

declare type TimeFrame = 'daily' | 'weekly' | 'monthly';

interface Period {
    current: number;
    previous: number;
}

type TimeFrameType = {
    [key in TimeFrame]: Period;
}


