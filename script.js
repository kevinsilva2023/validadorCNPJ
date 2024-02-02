function validaCNPJ (cnpj) {
    var b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ]
    var c = String(cnpj).replace(/[^\d]/g, '')
    const  naoverdadeiro = 'Verifique o CNPJ informado...'

    if(c.length !== 14)
        return naoverdadeiro

    if(/0{14}/.test(c))
        return naoverdadeiro
    
    if (c == "00000000000000" || 
        c == "11111111111111" || 
        c == "22222222222222" || 
        c == "33333333333333" || 
        c == "44444444444444" || 
        c == "55555555555555" || 
        c == "66666666666666" || 
        c == "77777777777777" || 
        c == "88888888888888" || 
        c == "99999999999999")
        return naoverdadeiro

    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
    if(c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return naoverdadeiro

    for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
    if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return naoverdadeiro
    
    return '';
}