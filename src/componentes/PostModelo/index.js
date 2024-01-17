 import'./PostModelo.css';

export default function PostModelo({ children, fotoCapa, titulo }) {
  return (
      <article className={"postModeloContainer"}>
          <div
              className={"fotoCapa"}
              style={{ backgroundImage: `url(${fotoCapa})` }}
          ></div>

          <h2 className={"titulo"}>
              {titulo}
          </h2>

          <div className={"postConteudoContainer"}>
              {children}
          </div>
      </article>
  )
}
