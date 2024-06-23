gdjs.Nucleo_95internoCode = {};
gdjs.Nucleo_95internoCode.localVariables = [];
gdjs.Nucleo_95internoCode.GDVoltarObjects1= [];
gdjs.Nucleo_95internoCode.GDVoltarObjects2= [];
gdjs.Nucleo_95internoCode.GDVoltarObjects3= [];
gdjs.Nucleo_95internoCode.GDFundoObjects1= [];
gdjs.Nucleo_95internoCode.GDFundoObjects2= [];
gdjs.Nucleo_95internoCode.GDFundoObjects3= [];
gdjs.Nucleo_95internoCode.GDtext1Objects1= [];
gdjs.Nucleo_95internoCode.GDtext1Objects2= [];
gdjs.Nucleo_95internoCode.GDtext1Objects3= [];
gdjs.Nucleo_95internoCode.GDSoundButtonObjects1= [];
gdjs.Nucleo_95internoCode.GDSoundButtonObjects2= [];
gdjs.Nucleo_95internoCode.GDSoundButtonObjects3= [];


gdjs.Nucleo_95internoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.Nucleo_95internoCode.GDSoundButtonObjects2);
{for(var i = 0, len = gdjs.Nucleo_95internoCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.Nucleo_95internoCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{for(var i = 0, len = gdjs.Nucleo_95internoCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.Nucleo_95internoCode.GDSoundButtonObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.Nucleo_95internoCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.Nucleo_95internoCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.Nucleo_95internoCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{for(var i = 0, len = gdjs.Nucleo_95internoCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.Nucleo_95internoCode.GDSoundButtonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.Nucleo_95internoCode.eventsList1 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12336596);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12337044);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12338668);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.Nucleo_95internoCode.mapOfGDgdjs_9546Nucleo_959595internoCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.Nucleo_95internoCode.GDVoltarObjects1});
gdjs.Nucleo_95internoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "4. nucleo interno saber mais.mp3", 1, false, 50, 1);
}}

}


{


gdjs.Nucleo_95internoCode.eventsList0(runtimeScene);
}


{


gdjs.Nucleo_95internoCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.Nucleo_95internoCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nucleo_95internoCode.mapOfGDgdjs_9546Nucleo_959595internoCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12339268);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12340468);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.Nucleo_95internoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Nucleo_95internoCode.GDVoltarObjects1.length = 0;
gdjs.Nucleo_95internoCode.GDVoltarObjects2.length = 0;
gdjs.Nucleo_95internoCode.GDVoltarObjects3.length = 0;
gdjs.Nucleo_95internoCode.GDFundoObjects1.length = 0;
gdjs.Nucleo_95internoCode.GDFundoObjects2.length = 0;
gdjs.Nucleo_95internoCode.GDFundoObjects3.length = 0;
gdjs.Nucleo_95internoCode.GDtext1Objects1.length = 0;
gdjs.Nucleo_95internoCode.GDtext1Objects2.length = 0;
gdjs.Nucleo_95internoCode.GDtext1Objects3.length = 0;
gdjs.Nucleo_95internoCode.GDSoundButtonObjects1.length = 0;
gdjs.Nucleo_95internoCode.GDSoundButtonObjects2.length = 0;
gdjs.Nucleo_95internoCode.GDSoundButtonObjects3.length = 0;

gdjs.Nucleo_95internoCode.eventsList2(runtimeScene);

return;

}

gdjs['Nucleo_95internoCode'] = gdjs.Nucleo_95internoCode;
