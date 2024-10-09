export interface alimentosProps {
    id: number;
    preparacao:string;
    pp_acucaradicao: number;
    pp_acucartotal: number;
    pp_aglinoleico: number;
    pp_aglinolenico: number;
    pp_agmono: number;
    pp_agpoli: number;
    pp_agsaturado: number;
    pp_agtranstotal: number;
    pp_calcio: number;
    pp_carboidrato: number;
    pp_cobalamina: number;
    pp_cobre: number;
    pp_colesterol: number;
    pp_energia: number;
    pp_ferro: number;
    pp_fibra: number;
    pp_folato: number;
    pp_fosforo: number;
    pp_lipidios: number;
    pp_magnesio: number;
    pp_manganes: number;
    pp_niacina: number;
    pp_niacina_ne: number;
    pp_piridoxina: number;
    pp_potassio: number;
    pp_preparacao: number;
    pp_produto: number;
    pp_proteina: number;
    pp_retinol: number;
    pp_riboflavina: number;
    pp_selenio: number;
    pp_sodio: number;
    pp_sodioadicao: number;
    pp_tiamina: number;
    pp_vitamina_a: number;
    pp_vitamina_c: number;
    pp_vitamina_d: number;
    pp_vitamina_e: number;
    pp_zinco: number;
    pro_descricao: string;
}
export interface produtoProps{
    id: number;
    user_default_id: number;
    nome: string;
    descricao: string;
    tamanho_porcao: number;
    unidade_tamanho_porcao: string;
    quantidade_por_porcao: number;
    unidade_quantidade_por_porcao: string;
    calorias: number;
    proteina: number;
    carboidrato: number;
    acucares: number;
    fibras: number;
    gordura_total: number;
    gordura_saturada: number;
    gordura_trans: number;
    calcio: number;
    sodio: number;
}