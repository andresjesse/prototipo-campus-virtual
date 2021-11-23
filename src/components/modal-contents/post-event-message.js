const PostEventMessage = () => (
  <div>
    <h1>O Futuro Chegou!</h1>

    <div style={{ textAlign: "justify" }}>
      <i>
        O SEI-SICITE 2021 acabou, mas as conquistas e o aprendizado merecem
        seguir adiante. O <b>Campus Virtual</b> está agora disponível como{" "}
        <b>Software Livre</b>, podendo ser utilizado e modificado livremente
        pela comunidade. Em nome de toda a Comissão de TI, registro aqui
        sinceros agradecimentos a todos que contribuíram para o sucesso deste
        evento.
      </i>
    </div>

    <div style={{ textAlign: "right", marginTop: 16 }}>
      <i>Prof. Dr. Andres Jessé Porfirio</i>
    </div>
    <div style={{ textAlign: "right" }}>
      <i>Presidente da Comissão de TI e Desenvolvedor do Campus Virtual.</i>
    </div>

    <div
      style={{
        marginTop: 32,
        textAlign: "center",
      }}
    >
      <a
        style={{
          color: "#395b94",
          textDecoration: "none",
        }}
        href="https://github.com/andresjesse/prototipo-campus-virtual"
        target="_blank"
      >
        https://github.com/andresjesse/prototipo-campus-virtual
      </a>
    </div>
  </div>
);

export default PostEventMessage;
