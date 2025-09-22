import dados from "../models/dados.js";
const { documentarios } = dados;

//Listar todos
const getAllDocumentarios = (req, res) => {
    res.status(200).json({
        total: documentarios.length,
        documentarios: documentarios
    })
};

//Pegar por id
const getDocumentariosById = (req, res) => {
    let id = parseInt(req.params.id);

    const documentario = documentarios.find(d => d.id === id);

    if (documentario) {
        res.status(200).json({
            success: true,
            documentario: documentario
        })
    }

    res.status(400).json({
        success: false,
        message: "Documentario não encontrado"
    })
};

const createDocumentarios = (req, res) => {
    const { id, titulo, tema, diretor, duracao, anoLancamento, plataforma, avaliacao, categoria } = req.body;

if (!titulo) {
    return res.status(400).json({
        success: false,
        message: "O campo 'titulo' é obrigatório"
    });
}

if (!tema) {
    return res.status(400).json({
        success: false,
        message: "O campo 'tema' é obrigatório"
    });
}

if (!diretor) {
    return res.status(400).json({
        success: false,
        message: "O campo 'diretor' é obrigatório"
    });
}

//Duração deve ser maior que 30 minutos
if (!duracao) {
    return res.status(400).json({
        success: false,
        message: "O campo 'titulo' é obrigatório"
    });
}

}


export { getAllDocumentarios, getDocumentariosById };

