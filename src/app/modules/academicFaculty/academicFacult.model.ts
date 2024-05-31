import { Schema, model } from "mongoose";
import { TAcademicFaculty } from "./academicFacult.interface";

export const acdemicFacultyShcema = new Schema<TAcademicFaculty>({
    name : {
        type : String,
        required : true,
        unique : true
    }
},
{
    timestamps : true
})

export const academicFaculty = model<TAcademicFaculty>("AcademicFaculty", acdemicFacultyShcema)