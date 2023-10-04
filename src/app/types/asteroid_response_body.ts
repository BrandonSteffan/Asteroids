import { Asteroid } from "./asteroid";

export interface asteroid_response_body{
    near_earth_objects:{
        "2023-09-28": Asteroid[],
        "2023-09-29": Asteroid[],
        "2023-09-26": Asteroid[],
        "2023-09-27": Asteroid[],
        "2023-09-25": Asteroid[],
        "2023-10-01": Asteroid[],
        "2023-10-02": Asteroid[],
    }
}