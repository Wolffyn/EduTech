gdjs.MapavegetacaoCode = {};
gdjs.MapavegetacaoCode.GDvegetaObjects1= [];
gdjs.MapavegetacaoCode.GDvegetaObjects2= [];
gdjs.MapavegetacaoCode.GDvegetaglobaObjects1= [];
gdjs.MapavegetacaoCode.GDvegetaglobaObjects2= [];
gdjs.MapavegetacaoCode.GDVegetacaobraObjects1= [];
gdjs.MapavegetacaoCode.GDVegetacaobraObjects2= [];
gdjs.MapavegetacaoCode.GDVegetacaoglobaObjects1= [];
gdjs.MapavegetacaoCode.GDVegetacaoglobaObjects2= [];
gdjs.MapavegetacaoCode.GDBiomasObjects1= [];
gdjs.MapavegetacaoCode.GDBiomasObjects2= [];
gdjs.MapavegetacaoCode.GDMenuObjects1= [];
gdjs.MapavegetacaoCode.GDMenuObjects2= [];


gdjs.MapavegetacaoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vegeta"), gdjs.MapavegetacaoCode.GDvegetaObjects1);
gdjs.copyArray(runtimeScene.getObjects("vegetagloba"), gdjs.MapavegetacaoCode.GDvegetaglobaObjects1);
{for(var i = 0, len = gdjs.MapavegetacaoCode.GDvegetaObjects1.length ;i < len;++i) {
    gdjs.MapavegetacaoCode.GDvegetaObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MapavegetacaoCode.GDvegetaglobaObjects1.length ;i < len;++i) {
    gdjs.MapavegetacaoCode.GDvegetaglobaObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vegeta"), gdjs.MapavegetacaoCode.GDvegetaObjects1);
gdjs.copyArray(runtimeScene.getObjects("vegetagloba"), gdjs.MapavegetacaoCode.GDvegetaglobaObjects1);
{for(var i = 0, len = gdjs.MapavegetacaoCode.GDvegetaObjects1.length ;i < len;++i) {
    gdjs.MapavegetacaoCode.GDvegetaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MapavegetacaoCode.GDvegetaglobaObjects1.length ;i < len;++i) {
    gdjs.MapavegetacaoCode.GDvegetaglobaObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vegeta"), gdjs.MapavegetacaoCode.GDvegetaObjects1);
gdjs.copyArray(runtimeScene.getObjects("vegetagloba"), gdjs.MapavegetacaoCode.GDvegetaglobaObjects1);
{for(var i = 0, len = gdjs.MapavegetacaoCode.GDvegetaObjects1.length ;i < len;++i) {
    gdjs.MapavegetacaoCode.GDvegetaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MapavegetacaoCode.GDvegetaglobaObjects1.length ;i < len;++i) {
    gdjs.MapavegetacaoCode.GDvegetaglobaObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vegetacaobra"), gdjs.MapavegetacaoCode.GDVegetacaobraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MapavegetacaoCode.GDVegetacaobraObjects1.length;i<l;++i) {
    if ( gdjs.MapavegetacaoCode.GDVegetacaobraObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MapavegetacaoCode.GDVegetacaobraObjects1[k] = gdjs.MapavegetacaoCode.GDVegetacaobraObjects1[i];
        ++k;
    }
}
gdjs.MapavegetacaoCode.GDVegetacaobraObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vegetacaogloba"), gdjs.MapavegetacaoCode.GDVegetacaoglobaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MapavegetacaoCode.GDVegetacaoglobaObjects1.length;i<l;++i) {
    if ( gdjs.MapavegetacaoCode.GDVegetacaoglobaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MapavegetacaoCode.GDVegetacaoglobaObjects1[k] = gdjs.MapavegetacaoCode.GDVegetacaoglobaObjects1[i];
        ++k;
    }
}
gdjs.MapavegetacaoCode.GDVegetacaoglobaObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Biomas"), gdjs.MapavegetacaoCode.GDBiomasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MapavegetacaoCode.GDBiomasObjects1.length;i<l;++i) {
    if ( gdjs.MapavegetacaoCode.GDBiomasObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MapavegetacaoCode.GDBiomasObjects1[k] = gdjs.MapavegetacaoCode.GDBiomasObjects1[i];
        ++k;
    }
}
gdjs.MapavegetacaoCode.GDBiomasObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.MapavegetacaoCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MapavegetacaoCode.GDMenuObjects1.length;i<l;++i) {
    if ( gdjs.MapavegetacaoCode.GDMenuObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MapavegetacaoCode.GDMenuObjects1[k] = gdjs.MapavegetacaoCode.GDMenuObjects1[i];
        ++k;
    }
}
gdjs.MapavegetacaoCode.GDMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};

gdjs.MapavegetacaoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MapavegetacaoCode.GDvegetaObjects1.length = 0;
gdjs.MapavegetacaoCode.GDvegetaObjects2.length = 0;
gdjs.MapavegetacaoCode.GDvegetaglobaObjects1.length = 0;
gdjs.MapavegetacaoCode.GDvegetaglobaObjects2.length = 0;
gdjs.MapavegetacaoCode.GDVegetacaobraObjects1.length = 0;
gdjs.MapavegetacaoCode.GDVegetacaobraObjects2.length = 0;
gdjs.MapavegetacaoCode.GDVegetacaoglobaObjects1.length = 0;
gdjs.MapavegetacaoCode.GDVegetacaoglobaObjects2.length = 0;
gdjs.MapavegetacaoCode.GDBiomasObjects1.length = 0;
gdjs.MapavegetacaoCode.GDBiomasObjects2.length = 0;
gdjs.MapavegetacaoCode.GDMenuObjects1.length = 0;
gdjs.MapavegetacaoCode.GDMenuObjects2.length = 0;

gdjs.MapavegetacaoCode.eventsList0(runtimeScene);

return;

}

gdjs['MapavegetacaoCode'] = gdjs.MapavegetacaoCode;
