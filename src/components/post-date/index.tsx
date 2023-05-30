import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function PostDate(post: Post) {
  return (
    <time dateTime={post.date} className="is-size-6 has-text-grey">
      {format(parseISO(post.date), "dd MMMM, yyyy", { locale: ptBR })}
    </time>
  )
}
