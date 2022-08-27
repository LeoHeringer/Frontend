import moment from 'moment';

function aplicarMarcaraEmCpfIso(cpf){
    if(cpf){
        return moment(cpf.locale('pr-br').format('###.###.###-##'));

    }
    return undefined;
}

export default {
    aplicarMarcaraEmCpfIso
}