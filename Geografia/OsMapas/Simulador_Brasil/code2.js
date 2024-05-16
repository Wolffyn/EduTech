gdjs.mapahistoCode = {};
gdjs.mapahistoCode.GDMapa_9595histoObjects1= [];
gdjs.mapahistoCode.GDMapa_9595histoObjects2= [];
gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1= [];
gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects2= [];
gdjs.mapahistoCode.GDAnuObjects1= [];
gdjs.mapahistoCode.GDAnuObjects2= [];
gdjs.mapahistoCode.GDmenuuuObjects1= [];
gdjs.mapahistoCode.GDmenuuuObjects2= [];
gdjs.mapahistoCode.GD_95951534Objects1= [];
gdjs.mapahistoCode.GD_95951534Objects2= [];
gdjs.mapahistoCode.GD_95951572Objects1= [];
gdjs.mapahistoCode.GD_95951572Objects2= [];
gdjs.mapahistoCode.GD_95951709Objects1= [];
gdjs.mapahistoCode.GD_95951709Objects2= [];
gdjs.mapahistoCode.GD_95951889Objects1= [];
gdjs.mapahistoCode.GD_95951889Objects2= [];
gdjs.mapahistoCode.GD_95951943Objects1= [];
gdjs.mapahistoCode.GD_95951943Objects2= [];
gdjs.mapahistoCode.GDfundoObjects1= [];
gdjs.mapahistoCode.GDfundoObjects2= [];
gdjs.mapahistoCode.GD_95951990Objects1= [];
gdjs.mapahistoCode.GD_95951990Objects2= [];
gdjs.mapahistoCode.GD_95951822Objects1= [];
gdjs.mapahistoCode.GD_95951822Objects2= [];
gdjs.mapahistoCode.GD_95951789Objects1= [];
gdjs.mapahistoCode.GD_95951789Objects2= [];


gdjs.mapahistoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallPlasticGreenSquareSlider"), gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1.length;i<l;++i) {
    if ( gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1[k] = gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1[i];
        ++k;
    }
}
gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Anu"), gdjs.mapahistoCode.GDAnuObjects1);
/* Reuse gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1 */
gdjs.copyArray(runtimeScene.getObjects("menuuu"), gdjs.mapahistoCode.GDmenuuuObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1.length === 0 ) ? 0 :gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{for(var i = 0, len = gdjs.mapahistoCode.GDmenuuuObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDmenuuuObjects1[i].setZOrder(70);
}
}{for(var i = 0, len = gdjs.mapahistoCode.GDAnuObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDAnuObjects1[i].setZOrder(70);
}
}{for(var i = 0, len = gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1[i].setZOrder(70);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Anu"), gdjs.mapahistoCode.GDAnuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mapa_histo"), gdjs.mapahistoCode.GDMapa_9595histoObjects1);
gdjs.copyArray(runtimeScene.getObjects("_1534"), gdjs.mapahistoCode.GD_95951534Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1572"), gdjs.mapahistoCode.GD_95951572Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1709"), gdjs.mapahistoCode.GD_95951709Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1789"), gdjs.mapahistoCode.GD_95951789Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1822"), gdjs.mapahistoCode.GD_95951822Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1889"), gdjs.mapahistoCode.GD_95951889Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1943"), gdjs.mapahistoCode.GD_95951943Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1990"), gdjs.mapahistoCode.GD_95951990Objects1);
{for(var i = 0, len = gdjs.mapahistoCode.GDMapa_9595histoObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDMapa_9595histoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mapahistoCode.GDAnuObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDAnuObjects1[i].getBehavior("Text").setText("Ano: 1534\nAs Capitanias Hereditárias\n\nElas foram divididas em partes, especificamente em 15 faixas de terra. Cada pedaço tinha um dono. Eram localizadas apenas na região que hoje pertence ao Nordeste e parte da região sudeste brasileira, a parte pertencente à Coroa portuguesa. O resto dos milhões de quilômetros que dizia respeito aos espanhóis");
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951534Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951534Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951889Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951889Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951709Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951709Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951572Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951572Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951943Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951943Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951990Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951990Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951822Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951822Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951789Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951789Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Anu"), gdjs.mapahistoCode.GDAnuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mapa_histo"), gdjs.mapahistoCode.GDMapa_9595histoObjects1);
gdjs.copyArray(runtimeScene.getObjects("_1534"), gdjs.mapahistoCode.GD_95951534Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1572"), gdjs.mapahistoCode.GD_95951572Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1709"), gdjs.mapahistoCode.GD_95951709Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1789"), gdjs.mapahistoCode.GD_95951789Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1822"), gdjs.mapahistoCode.GD_95951822Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1889"), gdjs.mapahistoCode.GD_95951889Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1943"), gdjs.mapahistoCode.GD_95951943Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1990"), gdjs.mapahistoCode.GD_95951990Objects1);
{for(var i = 0, len = gdjs.mapahistoCode.GDMapa_9595histoObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDMapa_9595histoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GDAnuObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDAnuObjects1[i].getBehavior("Text").setText("Ano: 1573\nDois Estados\nCom o passar dos anos, a divisão político-administrativa foi sofrendo alterações. Na época da colonização, a primeira maneira dessa divisão foram as Capitanias. Em seguida, o Brasil foi dividido em dois estados: Maranhão e Estado do Brasil, no ano de 1573. Com a expansão da colonização, o Brasil começou a ser habitado, os sistemas governamentais se desenvolveram.");
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951572Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951572Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951889Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951889Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951709Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951709Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951534Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951534Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951943Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951943Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951822Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951822Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951990Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951990Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951789Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951789Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Anu"), gdjs.mapahistoCode.GDAnuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mapa_histo"), gdjs.mapahistoCode.GDMapa_9595histoObjects1);
gdjs.copyArray(runtimeScene.getObjects("_1534"), gdjs.mapahistoCode.GD_95951534Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1572"), gdjs.mapahistoCode.GD_95951572Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1709"), gdjs.mapahistoCode.GD_95951709Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1789"), gdjs.mapahistoCode.GD_95951789Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1822"), gdjs.mapahistoCode.GD_95951822Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1889"), gdjs.mapahistoCode.GD_95951889Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1943"), gdjs.mapahistoCode.GD_95951943Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1990"), gdjs.mapahistoCode.GD_95951990Objects1);
{for(var i = 0, len = gdjs.mapahistoCode.GDMapa_9595histoObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDMapa_9595histoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GDAnuObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDAnuObjects1[i].getBehavior("Text").setText("Ano: 1709\nSão Paulo no seu máximo \nA partir de 1709, o Brasil já estava divido em sete estados. Onde hoje abrange parte da Amazônia, no Norte do país, localizava-se a província do Grão-Pará. Abaixo, na área que pertence atualmente a Rondônia, Mato Grosso, Mato Grosso do Sul, Tocantins, Minas Gerais, Goiás, São Paulo e parte do Paraná, era dominada pelo Estado de São Paulo. O estado do Nordeste era ocupado apenas por Maranhão, Pernambuco e Bahia. Na região Sul, apenas a província de São Pedro. A Sudeste, o Rio de Janeiro.");
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951709Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951709Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951889Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951889Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951534Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951534Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951572Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951572Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951943Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951943Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951990Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951990Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951822Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951822Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951789Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951789Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Anu"), gdjs.mapahistoCode.GDAnuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mapa_histo"), gdjs.mapahistoCode.GDMapa_9595histoObjects1);
gdjs.copyArray(runtimeScene.getObjects("_1534"), gdjs.mapahistoCode.GD_95951534Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1572"), gdjs.mapahistoCode.GD_95951572Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1709"), gdjs.mapahistoCode.GD_95951709Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1789"), gdjs.mapahistoCode.GD_95951789Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1822"), gdjs.mapahistoCode.GD_95951822Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1889"), gdjs.mapahistoCode.GD_95951889Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1943"), gdjs.mapahistoCode.GD_95951943Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1990"), gdjs.mapahistoCode.GD_95951990Objects1);
{for(var i = 0, len = gdjs.mapahistoCode.GDMapa_9595histoObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDMapa_9595histoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GDAnuObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDAnuObjects1[i].getBehavior("Text").setText("Ano: 1789\nInconfidência Mineira.");
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951889Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951889Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951572Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951572Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951534Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951534Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951709Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951709Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951943Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951943Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951990Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951990Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951822Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951822Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951789Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951789Objects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Anu"), gdjs.mapahistoCode.GDAnuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mapa_histo"), gdjs.mapahistoCode.GDMapa_9595histoObjects1);
gdjs.copyArray(runtimeScene.getObjects("_1534"), gdjs.mapahistoCode.GD_95951534Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1572"), gdjs.mapahistoCode.GD_95951572Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1709"), gdjs.mapahistoCode.GD_95951709Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1789"), gdjs.mapahistoCode.GD_95951789Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1822"), gdjs.mapahistoCode.GD_95951822Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1889"), gdjs.mapahistoCode.GD_95951889Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1943"), gdjs.mapahistoCode.GD_95951943Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1990"), gdjs.mapahistoCode.GD_95951990Objects1);
{for(var i = 0, len = gdjs.mapahistoCode.GDMapa_9595histoObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDMapa_9595histoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GDAnuObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDAnuObjects1[i].getBehavior("Text").setText("Ano: 1822\nProvíncias imperiais\nNo ano de 1822, um ano após a Declaração da Independência, foram acrescentados ainda mais territórios. O Brasil ganhou os estados do Rio Grande do Norte, Pernambuco, Paraíba, Alagoas, o Ceará e o Piauí. No Sul, houve o acréscimo do estado de Santa Catarina e da Província da Cisplatina, o atual Uruguai.");
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951889Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951889Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951572Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951572Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951534Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951534Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951709Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951709Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951943Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951943Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951990Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951990Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951822Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951822Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951789Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951789Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Anu"), gdjs.mapahistoCode.GDAnuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mapa_histo"), gdjs.mapahistoCode.GDMapa_9595histoObjects1);
gdjs.copyArray(runtimeScene.getObjects("_1534"), gdjs.mapahistoCode.GD_95951534Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1572"), gdjs.mapahistoCode.GD_95951572Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1709"), gdjs.mapahistoCode.GD_95951709Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1789"), gdjs.mapahistoCode.GD_95951789Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1822"), gdjs.mapahistoCode.GD_95951822Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1889"), gdjs.mapahistoCode.GD_95951889Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1943"), gdjs.mapahistoCode.GD_95951943Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1990"), gdjs.mapahistoCode.GD_95951990Objects1);
{for(var i = 0, len = gdjs.mapahistoCode.GDMapa_9595histoObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDMapa_9595histoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GDAnuObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDAnuObjects1[i].getBehavior("Text").setText("Ano: 1889\nInício da República");
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951889Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951889Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951572Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951572Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951534Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951534Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951709Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951709Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951943Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951943Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951990Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951990Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951822Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951822Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951789Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951789Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Anu"), gdjs.mapahistoCode.GDAnuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mapa_histo"), gdjs.mapahistoCode.GDMapa_9595histoObjects1);
gdjs.copyArray(runtimeScene.getObjects("_1534"), gdjs.mapahistoCode.GD_95951534Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1572"), gdjs.mapahistoCode.GD_95951572Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1709"), gdjs.mapahistoCode.GD_95951709Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1789"), gdjs.mapahistoCode.GD_95951789Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1822"), gdjs.mapahistoCode.GD_95951822Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1889"), gdjs.mapahistoCode.GD_95951889Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1943"), gdjs.mapahistoCode.GD_95951943Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1990"), gdjs.mapahistoCode.GD_95951990Objects1);
{for(var i = 0, len = gdjs.mapahistoCode.GDMapa_9595histoObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDMapa_9595histoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GDAnuObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDAnuObjects1[i].getBehavior("Text").setText("Ano: 1943\nNovas Unidades foram acopladas. Rio Branco localizava-se onde hoje é o Estado de Roraima, Amapá, Fernando de Noronha, Ponta-Porã e Iguaçu dividiam um território que pertence a Mato Grosso do Sul, Guaporé, Rondônia, o Acre e o Paraná.");
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951943Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951943Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951534Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951534Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951572Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951572Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951709Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951709Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951889Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951889Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951990Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951990Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951822Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951822Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951789Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951789Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Anu"), gdjs.mapahistoCode.GDAnuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mapa_histo"), gdjs.mapahistoCode.GDMapa_9595histoObjects1);
gdjs.copyArray(runtimeScene.getObjects("_1534"), gdjs.mapahistoCode.GD_95951534Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1572"), gdjs.mapahistoCode.GD_95951572Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1709"), gdjs.mapahistoCode.GD_95951709Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1789"), gdjs.mapahistoCode.GD_95951789Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1822"), gdjs.mapahistoCode.GD_95951822Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1889"), gdjs.mapahistoCode.GD_95951889Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1943"), gdjs.mapahistoCode.GD_95951943Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1990"), gdjs.mapahistoCode.GD_95951990Objects1);
{for(var i = 0, len = gdjs.mapahistoCode.GD_95951889Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951889Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951709Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951709Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951572Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951572Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951534Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951534Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GDMapa_9595histoObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDMapa_9595histoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951943Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951943Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951990Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951990Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mapahistoCode.GDAnuObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDAnuObjects1[i].getBehavior("Text").setText("Ano: 1990\nBrasil Atual\nA partir de 1960, o Presidente da República, na época Juscelino Kubitschek, juntamente com o urbanista Lúcio Costa, o arquiteto Oscar Niemeyer, Israel Pinheiro, Bernardo Sayão, entre outros, transferiram o Distrito Federal do Rio de Janeiro, para abrigar a Capital Federal, Brasília. Ela se encontra no Estado de Goiás. Contudo, em 1990, o país já contava com 26 Unidades Federativas, mais o Distrito Federal.");
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951822Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951822Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mapahistoCode.GD_95951789Objects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GD_95951789Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mapa_histo"), gdjs.mapahistoCode.GDMapa_9595histoObjects1);
{for(var i = 0, len = gdjs.mapahistoCode.GDMapa_9595histoObjects1.length ;i < len;++i) {
    gdjs.mapahistoCode.GDMapa_9595histoObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menuuu"), gdjs.mapahistoCode.GDmenuuuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mapahistoCode.GDmenuuuObjects1.length;i<l;++i) {
    if ( gdjs.mapahistoCode.GDmenuuuObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mapahistoCode.GDmenuuuObjects1[k] = gdjs.mapahistoCode.GDmenuuuObjects1[i];
        ++k;
    }
}
gdjs.mapahistoCode.GDmenuuuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.mapahistoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mapahistoCode.GDMapa_9595histoObjects1.length = 0;
gdjs.mapahistoCode.GDMapa_9595histoObjects2.length = 0;
gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects1.length = 0;
gdjs.mapahistoCode.GDSmallPlasticGreenSquareSliderObjects2.length = 0;
gdjs.mapahistoCode.GDAnuObjects1.length = 0;
gdjs.mapahistoCode.GDAnuObjects2.length = 0;
gdjs.mapahistoCode.GDmenuuuObjects1.length = 0;
gdjs.mapahistoCode.GDmenuuuObjects2.length = 0;
gdjs.mapahistoCode.GD_95951534Objects1.length = 0;
gdjs.mapahistoCode.GD_95951534Objects2.length = 0;
gdjs.mapahistoCode.GD_95951572Objects1.length = 0;
gdjs.mapahistoCode.GD_95951572Objects2.length = 0;
gdjs.mapahistoCode.GD_95951709Objects1.length = 0;
gdjs.mapahistoCode.GD_95951709Objects2.length = 0;
gdjs.mapahistoCode.GD_95951889Objects1.length = 0;
gdjs.mapahistoCode.GD_95951889Objects2.length = 0;
gdjs.mapahistoCode.GD_95951943Objects1.length = 0;
gdjs.mapahistoCode.GD_95951943Objects2.length = 0;
gdjs.mapahistoCode.GDfundoObjects1.length = 0;
gdjs.mapahistoCode.GDfundoObjects2.length = 0;
gdjs.mapahistoCode.GD_95951990Objects1.length = 0;
gdjs.mapahistoCode.GD_95951990Objects2.length = 0;
gdjs.mapahistoCode.GD_95951822Objects1.length = 0;
gdjs.mapahistoCode.GD_95951822Objects2.length = 0;
gdjs.mapahistoCode.GD_95951789Objects1.length = 0;
gdjs.mapahistoCode.GD_95951789Objects2.length = 0;

gdjs.mapahistoCode.eventsList0(runtimeScene);

return;

}

gdjs['mapahistoCode'] = gdjs.mapahistoCode;
