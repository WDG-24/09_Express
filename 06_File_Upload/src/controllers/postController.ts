import type { RequestHandler } from 'express';
import { Post } from '#models';
import { z } from 'zod/v4';
import type { postInputSchema } from '#schemas';

type PostInputDTO = z.infer<typeof postInputSchema>;
type PostDTO = z.infer<typeof postInputSchema>;

// SINGLE
// export const createPost: RequestHandler<
// unknown,
// any,
// PostInputDTO
// > = async(req,res) => {
//   const {title, content, author}= req.body;
//   const image = req.file;

//   const newPost = await Post.create({
//     title,
//     content,
//     author,
//     image_url: image?.path
//   })

//   console.log('cloudinary upload results', image)
//   res.status(201).json(newPost)

// };

// MULTIPLE UPLOAD
export const createPost: RequestHandler<unknown, any, PostInputDTO> = async (
  req,
  res
) => {
  const { title, content, author } = req.body;
  const files = (req.files as Express.Multer.File[]) || [];

  const imageUrl = files.map((file) => file.path);

  const newPost = await Post.create({
    title,
    content,
    author,
    image_url: imageUrl,
  });

  console.log('cloudinary upload results', files);
  res.status(201).json(newPost);
};

export const getAllPosts: RequestHandler = async (req, res) => {
  const posts = await Post.find().populate(
    'author',
    'firstName lastName email'
  );

  if (!posts.length) {
    throw new Error('Post not found', { cause: 404 });
  }

  res.status(200).json(posts);
};

export const getPostById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id).populate('author', 'firstName lastName');

  if (!post) {
    throw new Error('Post not found', { cause: 404 });
  }

  res.status(200).json(post);
};

export const updatePost: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { title, content, author },
    { new: true, runValidators: true }
  ).populate('author', 'firstName lastName');

  res.status(200).json({
    message: 'post updated successfully',
    post: updatedPost,
  });
};

export const deletePost: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const deletedPost = await Post.findByIdAndDelete(id);

  if (!deletedPost) {
    throw new Error('Post not found', { cause: 404 });
  }

  res.status(200).json({
    message: `Post with id:${id} was deleted`,
    post: deletedPost,
  });
};
