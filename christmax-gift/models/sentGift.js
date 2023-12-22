import { Schema, models, model } from "mongoose";



const sentGiftSchema = new Schema({
    senderId:{
        type: String
    },
    senderName:{
        type: String
    },
    recipientId:{
        type: String
    },
    recipientUserName:{
        type: String
    },
    GiftId:{
        type: String
    },
    GiftTitle:{
        type: String
    },
    Gift:{
        type: String
    },
})

const SentGift = models.SentGift || model("SentGift", sentGiftSchema);

export default SentGift