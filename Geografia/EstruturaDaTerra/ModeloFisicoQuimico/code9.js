gdjs.MesosferaCode = {};
gdjs.MesosferaCode.localVariables = [];
gdjs.MesosferaCode.GDVoltarObjects1= [];
gdjs.MesosferaCode.GDVoltarObjects2= [];
gdjs.MesosferaCode.GDVoltarObjects3= [];
gdjs.MesosferaCode.GDFundoObjects1= [];
gdjs.MesosferaCode.GDFundoObjects2= [];
gdjs.MesosferaCode.GDFundoObjects3= [];
gdjs.MesosferaCode.GDtextObjects1= [];
gdjs.MesosferaCode.GDtextObjects2= [];
gdjs.MesosferaCode.GDtextObjects3= [];
gdjs.MesosferaCode.GDNewSpriteObjects1= [];
gdjs.MesosferaCode.GDNewSpriteObjects2= [];
gdjs.MesosferaCode.GDNewSpriteObjects3= [];
gdjs.MesosferaCode.GDSoundButtonObjects1= [];
gdjs.MesosferaCode.GDSoundButtonObjects2= [];
gdjs.MesosferaCode.GDSoundButtonObjects3= [];


gdjs.MesosferaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.MesosferaCode.GDSoundButtonObjects2);
{for(var i = 0, len = gdjs.MesosferaCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.MesosferaCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{for(var i = 0, len = gdjs.MesosferaCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.MesosferaCode.GDSoundButtonObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.MesosferaCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.MesosferaCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.MesosferaCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{for(var i = 0, len = gdjs.MesosferaCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.MesosferaCode.GDSoundButtonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.MesosferaCode.eventsList1 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12679516);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12679964);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12681588);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.MesosferaCode.mapOfGDgdjs_9546MesosferaCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.MesosferaCode.GDVoltarObjects1});
gdjs.MesosferaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "3. Mesosfera saber mais.mp3", 1, false, 50, 1);
}}

}


{


gdjs.MesosferaCode.eventsList0(runtimeScene);
}


{


gdjs.MesosferaCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.MesosferaCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MesosferaCode.mapOfGDgdjs_9546MesosferaCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12682188);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12683388);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.MesosferaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MesosferaCode.GDVoltarObjects1.length = 0;
gdjs.MesosferaCode.GDVoltarObjects2.length = 0;
gdjs.MesosferaCode.GDVoltarObjects3.length = 0;
gdjs.MesosferaCode.GDFundoObjects1.length = 0;
gdjs.MesosferaCode.GDFundoObjects2.length = 0;
gdjs.MesosferaCode.GDFundoObjects3.length = 0;
gdjs.MesosferaCode.GDtextObjects1.length = 0;
gdjs.MesosferaCode.GDtextObjects2.length = 0;
gdjs.MesosferaCode.GDtextObjects3.length = 0;
gdjs.MesosferaCode.GDNewSpriteObjects1.length = 0;
gdjs.MesosferaCode.GDNewSpriteObjects2.length = 0;
gdjs.MesosferaCode.GDNewSpriteObjects3.length = 0;
gdjs.MesosferaCode.GDSoundButtonObjects1.length = 0;
gdjs.MesosferaCode.GDSoundButtonObjects2.length = 0;
gdjs.MesosferaCode.GDSoundButtonObjects3.length = 0;

gdjs.MesosferaCode.eventsList2(runtimeScene);

return;

}

gdjs['MesosferaCode'] = gdjs.MesosferaCode;
