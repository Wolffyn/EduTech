gdjs.AstenosferaCode = {};
gdjs.AstenosferaCode.localVariables = [];
gdjs.AstenosferaCode.GDVoltarObjects1= [];
gdjs.AstenosferaCode.GDVoltarObjects2= [];
gdjs.AstenosferaCode.GDVoltarObjects3= [];
gdjs.AstenosferaCode.GDFundoObjects1= [];
gdjs.AstenosferaCode.GDFundoObjects2= [];
gdjs.AstenosferaCode.GDFundoObjects3= [];
gdjs.AstenosferaCode.GDtextObjects1= [];
gdjs.AstenosferaCode.GDtextObjects2= [];
gdjs.AstenosferaCode.GDtextObjects3= [];
gdjs.AstenosferaCode.GDNewSpriteObjects1= [];
gdjs.AstenosferaCode.GDNewSpriteObjects2= [];
gdjs.AstenosferaCode.GDNewSpriteObjects3= [];
gdjs.AstenosferaCode.GDSoundButtonObjects1= [];
gdjs.AstenosferaCode.GDSoundButtonObjects2= [];
gdjs.AstenosferaCode.GDSoundButtonObjects3= [];


gdjs.AstenosferaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.AstenosferaCode.GDSoundButtonObjects2);
{for(var i = 0, len = gdjs.AstenosferaCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.AstenosferaCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{for(var i = 0, len = gdjs.AstenosferaCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.AstenosferaCode.GDSoundButtonObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.AstenosferaCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.AstenosferaCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.AstenosferaCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{for(var i = 0, len = gdjs.AstenosferaCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.AstenosferaCode.GDSoundButtonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.AstenosferaCode.eventsList1 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12653404);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12653852);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12655476);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.AstenosferaCode.mapOfGDgdjs_9546AstenosferaCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.AstenosferaCode.GDVoltarObjects1});
gdjs.AstenosferaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "2. Astenosfera saber mais.mp3", 1, false, 50, 1);
}}

}


{


gdjs.AstenosferaCode.eventsList0(runtimeScene);
}


{


gdjs.AstenosferaCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.AstenosferaCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.AstenosferaCode.mapOfGDgdjs_9546AstenosferaCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12656076);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12657276);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.AstenosferaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AstenosferaCode.GDVoltarObjects1.length = 0;
gdjs.AstenosferaCode.GDVoltarObjects2.length = 0;
gdjs.AstenosferaCode.GDVoltarObjects3.length = 0;
gdjs.AstenosferaCode.GDFundoObjects1.length = 0;
gdjs.AstenosferaCode.GDFundoObjects2.length = 0;
gdjs.AstenosferaCode.GDFundoObjects3.length = 0;
gdjs.AstenosferaCode.GDtextObjects1.length = 0;
gdjs.AstenosferaCode.GDtextObjects2.length = 0;
gdjs.AstenosferaCode.GDtextObjects3.length = 0;
gdjs.AstenosferaCode.GDNewSpriteObjects1.length = 0;
gdjs.AstenosferaCode.GDNewSpriteObjects2.length = 0;
gdjs.AstenosferaCode.GDNewSpriteObjects3.length = 0;
gdjs.AstenosferaCode.GDSoundButtonObjects1.length = 0;
gdjs.AstenosferaCode.GDSoundButtonObjects2.length = 0;
gdjs.AstenosferaCode.GDSoundButtonObjects3.length = 0;

gdjs.AstenosferaCode.eventsList2(runtimeScene);

return;

}

gdjs['AstenosferaCode'] = gdjs.AstenosferaCode;
