// vamos pras explicações
//  Agora a explicação é final é que: Vai ter dois botões
//  Um botão vai liberar valor analógico no PIN 0 e outro no PIN 1
//  Se o botão do P0 soltar o valor analogico, vai virar 180 graus
//  Mas se for o botão do P1, vai voltar 360 graus
//  Se os dois forem juntos, vai ir pra 90
//  Mas se nenhum for, vai para 0
basic.forever(function on_forever() {
    //  isso aqui é um loop, vai rodar o mesmo código varias vezes
    let valor_p0 = pins.analogReadPin(AnalogPin.P0)
    //  isso aqui vai ler o pin 0
    let valor_p1 = pins.analogReadPin(AnalogPin.P1)
    //  isso aqui vai ler o pin 1
    /** 
    ISSO É UM TESTE, PODE IGNORAR
    if input.button_is_pressed(Button.A):
        basic.show_number(valor_p0)
    if input.button_is_pressed(Button.B):
        basic.show_number(valor_p1)
    
 */
    if (valor_p0 > 512) {
        //  Se o valor do pin 1 é maior que 512
        servos.P2.setAngle(80)
    } else if (valor_p1 > 512) {
        //  Vira o servo 80 graus
        //  Mas se o pin 2 for maior que 512
        servos.P2.setAngle(40)
    } else if (valor_p1 && valor_p0 > 900) {
        //  O servo volta 40 graus
        //  Porém se os dois forem mais que 900 juntos
        servos.P2.setAngle(180)
    } else {
        //  Vira 180 graus
        servos.P2.setAngle(0)
    }
    
    //  E se nenhum for apertado, fica 0 graus
    
})
