import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Linkedin, Twitter, Clock, Calendar, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Article non trouvé</p>
        <Link to="/blog" className="text-primary-500 hover:underline">
          Retour au blog
        </Link>
      </div>
    );
  }

  const shareUrl = window.location.href;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour au blog
        </Link>

        <article className="bg-white rounded-xl shadow-card overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
          
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-dark-500 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {format(new Date(post.date), 'dd MMMM yyyy', { locale: fr })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime} min de lecture
              </div>
            </div>

            <h1 className="text-4xl font-bold font-lora text-dark-800 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-2 mb-8">
              <Tag className="h-4 w-4 text-dark-400" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="border-t border-gray-200 mt-12 pt-8">
              <h3 className="text-lg font-semibold text-dark-800 mb-4">
                Partager cet article
              </h3>
              <div className="flex gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-[#1877F2] transition-colors"
                  aria-label="Partager sur Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-[#1DA1F2] transition-colors"
                  aria-label="Partager sur Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-[#0A66C2] transition-colors"
                  aria-label="Partager sur LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}