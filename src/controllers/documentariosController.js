import dados from "../models/dados.js";
const { documentarios } = dados;

//Listar todos
const getAllDocumentarios = (req, res) => {
  res.status(200).json({
    total: documentarios.length,
    documentarios: documentarios,
  });
};

//Pegar por id
const getDocumentariosById = (req, res) => {
  let id = parseInt(req.params.id);

  const documentario = documentarios.find((d) => d.id === id);

  if (documentario) {
    res.status(200).json({
      success: true,
      documentario: documentario,
    });
  }

  res.status(400).json({
    success: false,
    message: "Documentario não encontrado",
  });
};

//tem um erro aq
const createDocumentarios = (req, res) => {
  const {id, titulo, tema, diretor, duracao, anoLancamento, plataforma, avaliacao, categoria} = req.body;

  if (!titulo) {
    return res.status(400).json({
      success: false,
      message: "O campo 'titulo' é obrigatório",
    });
  }

  if (!tema) {
    return res.status(400).json({
      success: false,
      message: "O campo 'tema' é obrigatório",
    });
  }

  if (!diretor) {
    return res.status(400).json({
      success: false,
      message: "O campo 'diretor' é obrigatório",
    });
  }

  //Duração deve ser maior que 30 minutos
  if (!duracao || duracao < 30) {
    return res.status(400).json({
      success: false,
      message: "O campo 'titulo' é obrigatório",
    });
  }

  if (!anoLancamento) {
    return res.status(400).json({
      success: false,
      message: "O campo 'anoLancamento' é obrigatório",
    });
  }

  if (!plataforma) {
    return res.status(400).json({
      success: false,
      message: "O campo 'plataforma' é obrigatório",
    });
  }

  //Avaliação deve estar entre 0 e 10
  if (!avaliacao || avaliacao <= 0 || avaliacao >= 10) {
    return res.status(400).json({
      success: false,
      message: "O campo 'avaliacao' é obrigatório e deve estar entre 1 e 10!",
    });
  }

  if (!categoria) {
    return res.status(400).json({
      success: false,
      message: "O campo 'categoria' é obrigatório",
    });
  }

  const novoDocumentario = {
    id: 11,
    titulo: "Wild Wild Country",
    tema: "Cultos e Conflitos Sociais",
    diretor: "Chapman Way e Maclain Way",
    duracao: "6 episódios",
    anoLancamento: 2018,
    plataforma: "Netflix",
    avaliacao: 8.0,
    categoria: "Série Documental",
  };

  documentarios.push(novoDocumentario);
  res.status(201).json({
    success: true,
    message: "Documentario cadastrado!",
    documentario: novoDocumentario,
  });
};

//deletar por id
const deleteDocumentarios = (req, res) => {
    let id = parseInt(req.params.id);
    const documentarioParaRemover = documentarios.find(d => d.id === id);

    if (!documentarioParaRemover) {
        return res.status(404).json({
            success: false,
            message: 'Este documentario nao existe'
        })
    }
    const documentariosFiltrados = documentarios.filter(documentario => documentario.id !== id);
    documentarios.splice(0, documentarios.length, ...documentariosFiltrados);
    res.status(200).json({
        success: true,
        message: 'documentario deletado com sucesso',
       documentarioRemovido: documentarioParaRemover
    });
};

const updateDocumento = (req, res) => {
    const id = parseInt(req.params.id);

    const { titulo, tema, diretor, duracao, anoLancamento, plataforma, avaliacao, categoria } = req.body;


    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser um número válido"
        })
    }
 
    const documentarioExiste = documentarios.find(documentario => documentario.id === id);

    if (!documentarioExiste) {
        return res.status(400).json({
            success: false,
            message: "O documentario não existe."
        })
    }

    if(!duracao) {
        if (elixir <= 0 || elixir >= 10) {
            return res.status(400).json({
                success: false,
                message: "O campo 'elixir' deve estar entre 1 e 9!"
            });
        }
    }
}


export { getAllDocumentarios, getDocumentariosById, createDocumentarios, deleteDocumentarios  };
