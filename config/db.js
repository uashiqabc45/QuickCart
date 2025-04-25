import mongoose from "mongoose";

let cached = global.mingoos

if (!cached) {
    cached = global.mingoos = { conn: null , promise: null }
}

async function connectDB() {
    if (cached.conn) {
        return cached.com
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands:false
        }

        cached.promise = mongoose.connect('${process.env.MONGODB_URI}/qiockcart',opts).then( mongoose => {
            return mongoos
        })
    }

    cached.conn = await cached.promise
    return cached.conn

}

export default connectDB