gdjs.menuCode = {};
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDRegiaoObjects1= [];
gdjs.menuCode.GDRegiaoObjects2= [];
gdjs.menuCode.GDhistoricoObjects1= [];
gdjs.menuCode.GDhistoricoObjects2= [];
gdjs.menuCode.GDNewSprite2Objects1= [];
gdjs.menuCode.GDNewSprite2Objects2= [];
gdjs.menuCode.GDMapaHidrobrObjects1= [];
gdjs.menuCode.GDMapaHidrobrObjects2= [];
gdjs.menuCode.GDMapaVegetacaoObjects1= [];
gdjs.menuCode.GDMapaVegetacaoObjects2= [];
gdjs.menuCode.GDMapaVegetacao2Objects1= [];
gdjs.menuCode.GDMapaVegetacao2Objects2= [];
gdjs.menuCode.GDMapabiomasObjects1= [];
gdjs.menuCode.GDMapabiomasObjects2= [];
gdjs.menuCode.GDClimaObjects1= [];
gdjs.menuCode.GDClimaObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Regiao"), gdjs.menuCode.GDRegiaoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDRegiaoObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDRegiaoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDRegiaoObjects1[k] = gdjs.menuCode.GDRegiaoObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDRegiaoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("historico"), gdjs.menuCode.GDhistoricoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDhistoricoObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDhistoricoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDhistoricoObjects1[k] = gdjs.menuCode.GDhistoricoObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDhistoricoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mapahisto", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MapaHidrobr"), gdjs.menuCode.GDMapaHidrobrObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDMapaHidrobrObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDMapaHidrobrObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDMapaHidrobrObjects1[k] = gdjs.menuCode.GDMapaHidrobrObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDMapaHidrobrObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa hidro", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MapaVegetacao"), gdjs.menuCode.GDMapaVegetacaoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDMapaVegetacaoObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDMapaVegetacaoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDMapaVegetacaoObjects1[k] = gdjs.menuCode.GDMapaVegetacaoObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDMapaVegetacaoObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapavegetacao", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MapaVegetacao2"), gdjs.menuCode.GDMapaVegetacao2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDMapaVegetacao2Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDMapaVegetacao2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDMapaVegetacao2Objects1[k] = gdjs.menuCode.GDMapaVegetacao2Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDMapaVegetacao2Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapavegetacao", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mapabiomas"), gdjs.menuCode.GDMapabiomasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDMapabiomasObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDMapabiomasObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDMapabiomasObjects1[k] = gdjs.menuCode.GDMapabiomasObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDMapabiomasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Biomas", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Clima"), gdjs.menuCode.GDClimaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDClimaObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDClimaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDClimaObjects1[k] = gdjs.menuCode.GDClimaObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDClimaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Clima", false);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDRegiaoObjects1.length = 0;
gdjs.menuCode.GDRegiaoObjects2.length = 0;
gdjs.menuCode.GDhistoricoObjects1.length = 0;
gdjs.menuCode.GDhistoricoObjects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;
gdjs.menuCode.GDMapaHidrobrObjects1.length = 0;
gdjs.menuCode.GDMapaHidrobrObjects2.length = 0;
gdjs.menuCode.GDMapaVegetacaoObjects1.length = 0;
gdjs.menuCode.GDMapaVegetacaoObjects2.length = 0;
gdjs.menuCode.GDMapaVegetacao2Objects1.length = 0;
gdjs.menuCode.GDMapaVegetacao2Objects2.length = 0;
gdjs.menuCode.GDMapabiomasObjects1.length = 0;
gdjs.menuCode.GDMapabiomasObjects2.length = 0;
gdjs.menuCode.GDClimaObjects1.length = 0;
gdjs.menuCode.GDClimaObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
