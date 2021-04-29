
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            email: String,
            password: String,
        }
        // {
        //     name: String,
        //     description: String,
        //     price: Number,
        //     quantity: Number,
        //     image: String
        // }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("user", schema);
    return User;
};