import * as monggodb from "mongodb";

export interface Employee {
    name: string;
    position: string;
    level: "junior" | "mid" | "senior";
    _id?: monggodb.ObjectId;
}