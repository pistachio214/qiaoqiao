// types/stars.ts
export interface Star {
    x: number;
    y: number;
    radius: number;
    speed: number;
    opacity: number;
    brightness: number;
    twinkleSpeed: number;
}

export interface StarfieldConfig {
    starCount: number;
    maxStarSpeed: number;
    minStarSpeed: number;
    maxStarSize: number;
    minStarSize: number;
    backgroundColor: string;
    starColor: string;
    enableTwinkle: boolean;
    enableShootingStars: boolean;
    shootingStarInterval: number;
}

export interface ShootingStar {
    x: number;
    y: number;
    length: number;
    speed: number;
    angle: number;
    opacity: number;
    active: boolean;
}