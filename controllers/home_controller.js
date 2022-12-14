const Post = require("../models/post");

const User = require("../models/user");
module.exports.home= async function(req,res){
   
        

        
        try{
        //populate the user of each post
        let posts =await Post.find({})
        .populate('user')
        .populate({
            path:'comments',
            populate : [{
                path: 'user'
            },
            {
                path: 'likes'
            }]

        })
        .populate('likes');
        // console.log(posts[1].comments);
        let users =  await User.find({});
        
            return res.render('home',{
            title: "Socail App|Home",
            posts: posts,
            all_users: users
        }); 
    }catch(err){
        console.log('error',err);
    }  
    
}