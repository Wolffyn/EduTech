gdjs.movimento_32convergenteCode = {};
gdjs.movimento_32convergenteCode.localVariables = [];
gdjs.movimento_32convergenteCode.GDVoltarObjects1= [];
gdjs.movimento_32convergenteCode.GDVoltarObjects2= [];
gdjs.movimento_32convergenteCode.GDVoltarObjects3= [];
gdjs.movimento_32convergenteCode.GDFundoObjects1= [];
gdjs.movimento_32convergenteCode.GDFundoObjects2= [];
gdjs.movimento_32convergenteCode.GDFundoObjects3= [];
gdjs.movimento_32convergenteCode.GDtext_9595convergenteObjects1= [];
gdjs.movimento_32convergenteCode.GDtext_9595convergenteObjects2= [];
gdjs.movimento_32convergenteCode.GDtext_9595convergenteObjects3= [];
gdjs.movimento_32convergenteCode.GDNewSpriteObjects1= [];
gdjs.movimento_32convergenteCode.GDNewSpriteObjects2= [];
gdjs.movimento_32convergenteCode.GDNewSpriteObjects3= [];
gdjs.movimento_32convergenteCode.GDterremoto_9595chileObjects1= [];
gdjs.movimento_32convergenteCode.GDterremoto_9595chileObjects2= [];
gdjs.movimento_32convergenteCode.GDterremoto_9595chileObjects3= [];
gdjs.movimento_32convergenteCode.GDhimalaiaObjects1= [];
gdjs.movimento_32convergenteCode.GDhimalaiaObjects2= [];
gdjs.movimento_32convergenteCode.GDhimalaiaObjects3= [];
gdjs.movimento_32convergenteCode.GDmaior_9595fossa_9595oceanicaObjects1= [];
gdjs.movimento_32convergenteCode.GDmaior_9595fossa_9595oceanicaObjects2= [];
gdjs.movimento_32convergenteCode.GDmaior_9595fossa_9595oceanicaObjects3= [];
gdjs.movimento_32convergenteCode.GDHimalaiaObjects1= [];
gdjs.movimento_32convergenteCode.GDHimalaiaObjects2= [];
gdjs.movimento_32convergenteCode.GDHimalaiaObjects3= [];
gdjs.movimento_32convergenteCode.GDFossa_9595OceanicaObjects1= [];
gdjs.movimento_32convergenteCode.GDFossa_9595OceanicaObjects2= [];
gdjs.movimento_32convergenteCode.GDFossa_9595OceanicaObjects3= [];
gdjs.movimento_32convergenteCode.GDResultado_9595terreObjects1= [];
gdjs.movimento_32convergenteCode.GDResultado_9595terreObjects2= [];
gdjs.movimento_32convergenteCode.GDResultado_9595terreObjects3= [];
gdjs.movimento_32convergenteCode.GDSoundButtonObjects1= [];
gdjs.movimento_32convergenteCode.GDSoundButtonObjects2= [];
gdjs.movimento_32convergenteCode.GDSoundButtonObjects3= [];


gdjs.movimento_32convergenteCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.movimento_32convergenteCode.GDSoundButtonObjects2);
{for(var i = 0, len = gdjs.movimento_32convergenteCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.movimento_32convergenteCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{for(var i = 0, len = gdjs.movimento_32convergenteCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.movimento_32convergenteCode.GDSoundButtonObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.movimento_32convergenteCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.movimento_32convergenteCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.movimento_32convergenteCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{for(var i = 0, len = gdjs.movimento_32convergenteCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.movimento_32convergenteCode.GDSoundButtonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.movimento_32convergenteCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Delay") >= 0.25;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12151764);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Delay") >= 0.25;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12152212);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "n");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12153836);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.movimento_32convergenteCode.mapOfGDgdjs_9546movimento_959532convergenteCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.movimento_32convergenteCode.GDVoltarObjects1});
gdjs.movimento_32convergenteCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "saiba mais_converg.mp3", 1, false, 50, 1);
}}

}


{


gdjs.movimento_32convergenteCode.eventsList0(runtimeScene);
}


{


gdjs.movimento_32convergenteCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.movimento_32convergenteCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.movimento_32convergenteCode.mapOfGDgdjs_9546movimento_959532convergenteCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12154436);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "v");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12155636);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.movimento_32convergenteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.movimento_32convergenteCode.GDVoltarObjects1.length = 0;
gdjs.movimento_32convergenteCode.GDVoltarObjects2.length = 0;
gdjs.movimento_32convergenteCode.GDVoltarObjects3.length = 0;
gdjs.movimento_32convergenteCode.GDFundoObjects1.length = 0;
gdjs.movimento_32convergenteCode.GDFundoObjects2.length = 0;
gdjs.movimento_32convergenteCode.GDFundoObjects3.length = 0;
gdjs.movimento_32convergenteCode.GDtext_9595convergenteObjects1.length = 0;
gdjs.movimento_32convergenteCode.GDtext_9595convergenteObjects2.length = 0;
gdjs.movimento_32convergenteCode.GDtext_9595convergenteObjects3.length = 0;
gdjs.movimento_32convergenteCode.GDNewSpriteObjects1.length = 0;
gdjs.movimento_32convergenteCode.GDNewSpriteObjects2.length = 0;
gdjs.movimento_32convergenteCode.GDNewSpriteObjects3.length = 0;
gdjs.movimento_32convergenteCode.GDterremoto_9595chileObjects1.length = 0;
gdjs.movimento_32convergenteCode.GDterremoto_9595chileObjects2.length = 0;
gdjs.movimento_32convergenteCode.GDterremoto_9595chileObjects3.length = 0;
gdjs.movimento_32convergenteCode.GDhimalaiaObjects1.length = 0;
gdjs.movimento_32convergenteCode.GDhimalaiaObjects2.length = 0;
gdjs.movimento_32convergenteCode.GDhimalaiaObjects3.length = 0;
gdjs.movimento_32convergenteCode.GDmaior_9595fossa_9595oceanicaObjects1.length = 0;
gdjs.movimento_32convergenteCode.GDmaior_9595fossa_9595oceanicaObjects2.length = 0;
gdjs.movimento_32convergenteCode.GDmaior_9595fossa_9595oceanicaObjects3.length = 0;
gdjs.movimento_32convergenteCode.GDHimalaiaObjects1.length = 0;
gdjs.movimento_32convergenteCode.GDHimalaiaObjects2.length = 0;
gdjs.movimento_32convergenteCode.GDHimalaiaObjects3.length = 0;
gdjs.movimento_32convergenteCode.GDFossa_9595OceanicaObjects1.length = 0;
gdjs.movimento_32convergenteCode.GDFossa_9595OceanicaObjects2.length = 0;
gdjs.movimento_32convergenteCode.GDFossa_9595OceanicaObjects3.length = 0;
gdjs.movimento_32convergenteCode.GDResultado_9595terreObjects1.length = 0;
gdjs.movimento_32convergenteCode.GDResultado_9595terreObjects2.length = 0;
gdjs.movimento_32convergenteCode.GDResultado_9595terreObjects3.length = 0;
gdjs.movimento_32convergenteCode.GDSoundButtonObjects1.length = 0;
gdjs.movimento_32convergenteCode.GDSoundButtonObjects2.length = 0;
gdjs.movimento_32convergenteCode.GDSoundButtonObjects3.length = 0;

gdjs.movimento_32convergenteCode.eventsList2(runtimeScene);

return;

}

gdjs['movimento_32convergenteCode'] = gdjs.movimento_32convergenteCode;
