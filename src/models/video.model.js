import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
    {
        videoFile : {
            type : String,
            required : true,
        },
        thumbnail : {
            type : String,
            required : true,
        },
        title : {
            type : String,
            required : true,
            trim : true,
            index : true
        },
        description : {
            type : String,
            required : true,
            trim : true,
        },
        duration :{
            type : Number,
            required : true,
        },
        viewCount : {
            type : Number,
            default : 0,
        },
        isPublished : {
            type : Boolean,
            default : true,
        },
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "USER"
        },
    },
    {timestamps:true}
);

videoSchema.plugin(mongooseAggregatePaginate);

export const VIDEO = mongoose.model("VIDEO", videoSchema);