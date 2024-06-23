gdjs.LitosferaCode = {};
gdjs.LitosferaCode.localVariables = [];
gdjs.LitosferaCode.GDVoltarObjects1= [];
gdjs.LitosferaCode.GDVoltarObjects2= [];
gdjs.LitosferaCode.GDVoltarObjects3= [];
gdjs.LitosferaCode.GDFundoObjects1= [];
gdjs.LitosferaCode.GDFundoObjects2= [];
gdjs.LitosferaCode.GDFundoObjects3= [];
gdjs.LitosferaCode.GDtextObjects1= [];
gdjs.LitosferaCode.GDtextObjects2= [];
gdjs.LitosferaCode.GDtextObjects3= [];
gdjs.LitosferaCode.GDNewSpriteObjects1= [];
gdjs.LitosferaCode.GDNewSpriteObjects2= [];
gdjs.LitosferaCode.GDNewSpriteObjects3= [];
gdjs.LitosferaCode.GDSoundButtonObjects1= [];
gdjs.LitosferaCode.GDSoundButtonObjects2= [];
gdjs.LitosferaCode.GDSoundButtonObjects3= [];


gdjs.LitosferaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.LitosferaCode.GDSoundButtonObjects2);
{for(var i = 0, len = gdjs.LitosferaCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.LitosferaCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{for(var i = 0, len = gdjs.LitosferaCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.LitosferaCode.GDSoundButtonObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.LitosferaCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.LitosferaCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.LitosferaCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{for(var i = 0, len = gdjs.LitosferaCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.LitosferaCode.GDSoundButtonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.LitosferaCode.eventsList1 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12626340);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12626788);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12628412);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.LitosferaCode.mapOfGDgdjs_9546LitosferaCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.LitosferaCode.GDVoltarObjects1});
gdjs.LitosferaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "1. Litosfera saber mais.mp3", 1, false, 50, 1);
}}

}


{


gdjs.LitosferaCode.eventsList0(runtimeScene);
}


{


gdjs.LitosferaCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.LitosferaCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LitosferaCode.mapOfGDgdjs_9546LitosferaCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12629012);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12630212);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.LitosferaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LitosferaCode.GDVoltarObjects1.length = 0;
gdjs.LitosferaCode.GDVoltarObjects2.length = 0;
gdjs.LitosferaCode.GDVoltarObjects3.length = 0;
gdjs.LitosferaCode.GDFundoObjects1.length = 0;
gdjs.LitosferaCode.GDFundoObjects2.length = 0;
gdjs.LitosferaCode.GDFundoObjects3.length = 0;
gdjs.LitosferaCode.GDtextObjects1.length = 0;
gdjs.LitosferaCode.GDtextObjects2.length = 0;
gdjs.LitosferaCode.GDtextObjects3.length = 0;
gdjs.LitosferaCode.GDNewSpriteObjects1.length = 0;
gdjs.LitosferaCode.GDNewSpriteObjects2.length = 0;
gdjs.LitosferaCode.GDNewSpriteObjects3.length = 0;
gdjs.LitosferaCode.GDSoundButtonObjects1.length = 0;
gdjs.LitosferaCode.GDSoundButtonObjects2.length = 0;
gdjs.LitosferaCode.GDSoundButtonObjects3.length = 0;

gdjs.LitosferaCode.eventsList2(runtimeScene);

return;

}

gdjs['LitosferaCode'] = gdjs.LitosferaCode;
