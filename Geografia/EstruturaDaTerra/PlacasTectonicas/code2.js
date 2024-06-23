gdjs.movimento_32divergenteCode = {};
gdjs.movimento_32divergenteCode.localVariables = [];
gdjs.movimento_32divergenteCode.GDVoltarObjects1= [];
gdjs.movimento_32divergenteCode.GDVoltarObjects2= [];
gdjs.movimento_32divergenteCode.GDVoltarObjects3= [];
gdjs.movimento_32divergenteCode.GDFundoObjects1= [];
gdjs.movimento_32divergenteCode.GDFundoObjects2= [];
gdjs.movimento_32divergenteCode.GDFundoObjects3= [];
gdjs.movimento_32divergenteCode.GDtextObjects1= [];
gdjs.movimento_32divergenteCode.GDtextObjects2= [];
gdjs.movimento_32divergenteCode.GDtextObjects3= [];
gdjs.movimento_32divergenteCode.GDdorsal_9595mesoatlanticaObjects1= [];
gdjs.movimento_32divergenteCode.GDdorsal_9595mesoatlanticaObjects2= [];
gdjs.movimento_32divergenteCode.GDdorsal_9595mesoatlanticaObjects3= [];
gdjs.movimento_32divergenteCode.GDdorsalObjects1= [];
gdjs.movimento_32divergenteCode.GDdorsalObjects2= [];
gdjs.movimento_32divergenteCode.GDdorsalObjects3= [];
gdjs.movimento_32divergenteCode.GDvale_9595rifteObjects1= [];
gdjs.movimento_32divergenteCode.GDvale_9595rifteObjects2= [];
gdjs.movimento_32divergenteCode.GDvale_9595rifteObjects3= [];
gdjs.movimento_32divergenteCode.GDvaleObjects1= [];
gdjs.movimento_32divergenteCode.GDvaleObjects2= [];
gdjs.movimento_32divergenteCode.GDvaleObjects3= [];
gdjs.movimento_32divergenteCode.GDSoundButtonObjects1= [];
gdjs.movimento_32divergenteCode.GDSoundButtonObjects2= [];
gdjs.movimento_32divergenteCode.GDSoundButtonObjects3= [];


gdjs.movimento_32divergenteCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.movimento_32divergenteCode.GDSoundButtonObjects2);
{for(var i = 0, len = gdjs.movimento_32divergenteCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.movimento_32divergenteCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{for(var i = 0, len = gdjs.movimento_32divergenteCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.movimento_32divergenteCode.GDSoundButtonObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.movimento_32divergenteCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.movimento_32divergenteCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.movimento_32divergenteCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{for(var i = 0, len = gdjs.movimento_32divergenteCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.movimento_32divergenteCode.GDSoundButtonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.movimento_32divergenteCode.eventsList1 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12119884);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12120332);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12121956);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.movimento_32divergenteCode.mapOfGDgdjs_9546movimento_959532divergenteCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.movimento_32divergenteCode.GDVoltarObjects1});
gdjs.movimento_32divergenteCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "saiba mais_diverg.mp3", 1, false, 50, 1);
}}

}


{


gdjs.movimento_32divergenteCode.eventsList0(runtimeScene);
}


{


gdjs.movimento_32divergenteCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.movimento_32divergenteCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.movimento_32divergenteCode.mapOfGDgdjs_9546movimento_959532divergenteCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12122556);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12123756);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.movimento_32divergenteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.movimento_32divergenteCode.GDVoltarObjects1.length = 0;
gdjs.movimento_32divergenteCode.GDVoltarObjects2.length = 0;
gdjs.movimento_32divergenteCode.GDVoltarObjects3.length = 0;
gdjs.movimento_32divergenteCode.GDFundoObjects1.length = 0;
gdjs.movimento_32divergenteCode.GDFundoObjects2.length = 0;
gdjs.movimento_32divergenteCode.GDFundoObjects3.length = 0;
gdjs.movimento_32divergenteCode.GDtextObjects1.length = 0;
gdjs.movimento_32divergenteCode.GDtextObjects2.length = 0;
gdjs.movimento_32divergenteCode.GDtextObjects3.length = 0;
gdjs.movimento_32divergenteCode.GDdorsal_9595mesoatlanticaObjects1.length = 0;
gdjs.movimento_32divergenteCode.GDdorsal_9595mesoatlanticaObjects2.length = 0;
gdjs.movimento_32divergenteCode.GDdorsal_9595mesoatlanticaObjects3.length = 0;
gdjs.movimento_32divergenteCode.GDdorsalObjects1.length = 0;
gdjs.movimento_32divergenteCode.GDdorsalObjects2.length = 0;
gdjs.movimento_32divergenteCode.GDdorsalObjects3.length = 0;
gdjs.movimento_32divergenteCode.GDvale_9595rifteObjects1.length = 0;
gdjs.movimento_32divergenteCode.GDvale_9595rifteObjects2.length = 0;
gdjs.movimento_32divergenteCode.GDvale_9595rifteObjects3.length = 0;
gdjs.movimento_32divergenteCode.GDvaleObjects1.length = 0;
gdjs.movimento_32divergenteCode.GDvaleObjects2.length = 0;
gdjs.movimento_32divergenteCode.GDvaleObjects3.length = 0;
gdjs.movimento_32divergenteCode.GDSoundButtonObjects1.length = 0;
gdjs.movimento_32divergenteCode.GDSoundButtonObjects2.length = 0;
gdjs.movimento_32divergenteCode.GDSoundButtonObjects3.length = 0;

gdjs.movimento_32divergenteCode.eventsList2(runtimeScene);

return;

}

gdjs['movimento_32divergenteCode'] = gdjs.movimento_32divergenteCode;
