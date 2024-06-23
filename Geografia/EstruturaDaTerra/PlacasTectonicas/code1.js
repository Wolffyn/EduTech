gdjs.placas_32tectonicas_32da_32terraCode = {};
gdjs.placas_32tectonicas_32da_32terraCode.localVariables = [];
gdjs.placas_32tectonicas_32da_32terraCode.GDVoltarObjects1= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDVoltarObjects2= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDVoltarObjects3= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDFundoObjects1= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDFundoObjects2= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDFundoObjects3= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDtextObjects1= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDtextObjects2= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDtextObjects3= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDNewSpriteObjects1= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDNewSpriteObjects2= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDNewSpriteObjects3= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDimgObjects1= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDimgObjects2= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDimgObjects3= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDNewSprite2Objects1= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDNewSprite2Objects2= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDNewSprite2Objects3= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects1= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects2= [];
gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects3= [];


gdjs.placas_32tectonicas_32da_32terraCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects2);
{for(var i = 0, len = gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{for(var i = 0, len = gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{for(var i = 0, len = gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.placas_32tectonicas_32da_32terraCode.eventsList1 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12089436);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12089884);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12091508);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.placas_32tectonicas_32da_32terraCode.mapOfGDgdjs_9546placas_959532tectonicas_959532da_959532terraCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.placas_32tectonicas_32da_32terraCode.GDVoltarObjects1});
gdjs.placas_32tectonicas_32da_32terraCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "saiba mais_placas.mp3", 1, false, 50, 1);
}}

}


{


gdjs.placas_32tectonicas_32da_32terraCode.eventsList0(runtimeScene);
}


{


gdjs.placas_32tectonicas_32da_32terraCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.placas_32tectonicas_32da_32terraCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.placas_32tectonicas_32da_32terraCode.mapOfGDgdjs_9546placas_959532tectonicas_959532da_959532terraCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12092108);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12093308);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.placas_32tectonicas_32da_32terraCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.placas_32tectonicas_32da_32terraCode.GDVoltarObjects1.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDVoltarObjects2.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDVoltarObjects3.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDFundoObjects1.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDFundoObjects2.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDFundoObjects3.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDtextObjects1.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDtextObjects2.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDtextObjects3.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDNewSpriteObjects1.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDNewSpriteObjects2.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDNewSpriteObjects3.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDimgObjects1.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDimgObjects2.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDimgObjects3.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDNewSprite2Objects1.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDNewSprite2Objects2.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDNewSprite2Objects3.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects1.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects2.length = 0;
gdjs.placas_32tectonicas_32da_32terraCode.GDSoundButtonObjects3.length = 0;

gdjs.placas_32tectonicas_32da_32terraCode.eventsList2(runtimeScene);

return;

}

gdjs['placas_32tectonicas_32da_32terraCode'] = gdjs.placas_32tectonicas_32da_32terraCode;
