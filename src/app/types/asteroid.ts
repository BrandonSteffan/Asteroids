export interface Asteroid {
    id :number;
    name: string;
    estimated_diameter:{
        kilometers: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        },
    };
    close_approach_data:[
        {
            close_approach_date: string
        }
    ];
    is_potentially_hazardous_asteroid: boolean;
}