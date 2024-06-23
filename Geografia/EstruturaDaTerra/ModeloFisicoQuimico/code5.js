gdjs.teste1Code = {};
gdjs.teste1Code.localVariables = [];
gdjs.teste1Code.GDfundoObjects1= [];
gdjs.teste1Code.GDfundoObjects2= [];
gdjs.teste1Code.GDfundoObjects3= [];
gdjs.teste1Code.GDfundoObjects4= [];
gdjs.teste1Code.GDbot_95227o_9595comumObjects1= [];
gdjs.teste1Code.GDbot_95227o_9595comumObjects2= [];
gdjs.teste1Code.GDbot_95227o_9595comumObjects3= [];
gdjs.teste1Code.GDbot_95227o_9595comumObjects4= [];
gdjs.teste1Code.GDaudio_9595on_9595offObjects1= [];
gdjs.teste1Code.GDaudio_9595on_9595offObjects2= [];
gdjs.teste1Code.GDaudio_9595on_9595offObjects3= [];
gdjs.teste1Code.GDaudio_9595on_9595offObjects4= [];
gdjs.teste1Code.GDbot_95227o_9595comum2Objects1= [];
gdjs.teste1Code.GDbot_95227o_9595comum2Objects2= [];
gdjs.teste1Code.GDbot_95227o_9595comum2Objects3= [];
gdjs.teste1Code.GDbot_95227o_9595comum2Objects4= [];
gdjs.teste1Code.GDbot_95227o_9595comum3Objects1= [];
gdjs.teste1Code.GDbot_95227o_9595comum3Objects2= [];
gdjs.teste1Code.GDbot_95227o_9595comum3Objects3= [];
gdjs.teste1Code.GDbot_95227o_9595comum3Objects4= [];
gdjs.teste1Code.GDSoundButtonObjects1= [];
gdjs.teste1Code.GDSoundButtonObjects2= [];
gdjs.teste1Code.GDSoundButtonObjects3= [];
gdjs.teste1Code.GDSoundButtonObjects4= [];


gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comumObjects1Objects = Hashtable.newFrom({"botão_comum": gdjs.teste1Code.GDbot_95227o_9595comumObjects1});
gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum3Objects1Objects = Hashtable.newFrom({"botão_comum3": gdjs.teste1Code.GDbot_95227o_9595comum3Objects1});
gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum2Objects1Objects = Hashtable.newFrom({"botão_comum2": gdjs.teste1Code.GDbot_95227o_9595comum2Objects1});
gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comumObjects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum2Objects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum3Objects1Objects = Hashtable.newFrom({"botão_comum": gdjs.teste1Code.GDbot_95227o_9595comumObjects1, "botão_comum2": gdjs.teste1Code.GDbot_95227o_9595comum2Objects1, "botão_comum3": gdjs.teste1Code.GDbot_95227o_9595comum3Objects1});
gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comumObjects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum2Objects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum3Objects1Objects = Hashtable.newFrom({"botão_comum": gdjs.teste1Code.GDbot_95227o_9595comumObjects1, "botão_comum2": gdjs.teste1Code.GDbot_95227o_9595comum2Objects1, "botão_comum3": gdjs.teste1Code.GDbot_95227o_9595comum3Objects1});
gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comumObjects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum2Objects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum3Objects1Objects = Hashtable.newFrom({"botão_comum": gdjs.teste1Code.GDbot_95227o_9595comumObjects1, "botão_comum2": gdjs.teste1Code.GDbot_95227o_9595comum2Objects1, "botão_comum3": gdjs.teste1Code.GDbot_95227o_9595comum3Objects1});
gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comumObjects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum2Objects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum3Objects1Objects = Hashtable.newFrom({"botão_comum": gdjs.teste1Code.GDbot_95227o_9595comumObjects1, "botão_comum2": gdjs.teste1Code.GDbot_95227o_9595comum2Objects1, "botão_comum3": gdjs.teste1Code.GDbot_95227o_9595comum3Objects1});
gdjs.teste1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.teste1Code.GDSoundButtonObjects3);
{for(var i = 0, len = gdjs.teste1Code.GDSoundButtonObjects3.length ;i < len;++i) {
    gdjs.teste1Code.GDSoundButtonObjects3[i].getBehavior("Animation").setAnimationName("on");
}
}{for(var i = 0, len = gdjs.teste1Code.GDSoundButtonObjects3.length ;i < len;++i) {
    gdjs.teste1Code.GDSoundButtonObjects3[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.teste1Code.GDSoundButtonObjects2);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.teste1Code.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.teste1Code.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("off");
}
}{for(var i = 0, len = gdjs.teste1Code.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.teste1Code.GDSoundButtonObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.teste1Code.eventsList1 = function(runtimeScene) {

{


gdjs.teste1Code.eventsList0(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Delay") >= 0.25;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12371644);
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
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Delay") >= 0.25;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12372908);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12373764);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.teste1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("audio_on_off"), gdjs.teste1Code.GDaudio_9595on_9595offObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "yes");
}{for(var i = 0, len = gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length ;i < len;++i) {
    gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].setVariableBoolean(gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariables().getFromIndex(0), true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("botão_comum"), gdjs.teste1Code.GDbot_95227o_9595comumObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comumObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12358492);
}
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("botão_comum3"), gdjs.teste1Code.GDbot_95227o_9595comum3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12358948);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "teclas 1-2-3-4.mp3", 5, false, 30, 2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botão_comum2"), gdjs.teste1Code.GDbot_95227o_9595comum2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12360444);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Run_10.wav", 5, false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botão_comum"), gdjs.teste1Code.GDbot_95227o_9595comumObjects1);
gdjs.copyArray(runtimeScene.getObjects("botão_comum2"), gdjs.teste1Code.GDbot_95227o_9595comum2Objects1);
gdjs.copyArray(runtimeScene.getObjects("botão_comum3"), gdjs.teste1Code.GDbot_95227o_9595comum3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comumObjects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum2Objects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.teste1Code.GDbot_95227o_9595comumObjects1 */
/* Reuse gdjs.teste1Code.GDbot_95227o_9595comum2Objects1 */
/* Reuse gdjs.teste1Code.GDbot_95227o_9595comum3Objects1 */
{for(var i = 0, len = gdjs.teste1Code.GDbot_95227o_9595comumObjects1.length ;i < len;++i) {
    gdjs.teste1Code.GDbot_95227o_9595comumObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.teste1Code.GDbot_95227o_9595comum2Objects1.length ;i < len;++i) {
    gdjs.teste1Code.GDbot_95227o_9595comum2Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.teste1Code.GDbot_95227o_9595comum3Objects1.length ;i < len;++i) {
    gdjs.teste1Code.GDbot_95227o_9595comum3Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botão_comum"), gdjs.teste1Code.GDbot_95227o_9595comumObjects1);
gdjs.copyArray(runtimeScene.getObjects("botão_comum2"), gdjs.teste1Code.GDbot_95227o_9595comum2Objects1);
gdjs.copyArray(runtimeScene.getObjects("botão_comum3"), gdjs.teste1Code.GDbot_95227o_9595comum3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comumObjects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum2Objects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum3Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.teste1Code.GDbot_95227o_9595comumObjects1 */
/* Reuse gdjs.teste1Code.GDbot_95227o_9595comum2Objects1 */
/* Reuse gdjs.teste1Code.GDbot_95227o_9595comum3Objects1 */
{for(var i = 0, len = gdjs.teste1Code.GDbot_95227o_9595comumObjects1.length ;i < len;++i) {
    gdjs.teste1Code.GDbot_95227o_9595comumObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.teste1Code.GDbot_95227o_9595comum2Objects1.length ;i < len;++i) {
    gdjs.teste1Code.GDbot_95227o_9595comum2Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.teste1Code.GDbot_95227o_9595comum3Objects1.length ;i < len;++i) {
    gdjs.teste1Code.GDbot_95227o_9595comum3Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("audio_on_off"), gdjs.teste1Code.GDaudio_9595on_9595offObjects1);
gdjs.copyArray(runtimeScene.getObjects("botão_comum"), gdjs.teste1Code.GDbot_95227o_9595comumObjects1);
gdjs.copyArray(runtimeScene.getObjects("botão_comum2"), gdjs.teste1Code.GDbot_95227o_9595comum2Objects1);
gdjs.copyArray(runtimeScene.getObjects("botão_comum3"), gdjs.teste1Code.GDbot_95227o_9595comum3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comumObjects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum2Objects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length;i<l;++i) {
    if ( gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariableBoolean(gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.teste1Code.GDaudio_9595on_9595offObjects1[k] = gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i];
        ++k;
    }
}
gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("audio_on_off"), gdjs.teste1Code.GDaudio_9595on_9595offObjects1);
gdjs.copyArray(runtimeScene.getObjects("botão_comum"), gdjs.teste1Code.GDbot_95227o_9595comumObjects1);
gdjs.copyArray(runtimeScene.getObjects("botão_comum2"), gdjs.teste1Code.GDbot_95227o_9595comum2Objects1);
gdjs.copyArray(runtimeScene.getObjects("botão_comum3"), gdjs.teste1Code.GDbot_95227o_9595comum3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.teste1Code.mapOfGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comumObjects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum2Objects1ObjectsGDgdjs_9546teste1Code_9546GDbot_959595227o_95959595comum3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length;i<l;++i) {
    if ( gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariableBoolean(gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.teste1Code.GDaudio_9595on_9595offObjects1[k] = gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i];
        ++k;
    }
}
gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 5);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("audio_on_off"), gdjs.teste1Code.GDaudio_9595on_9595offObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "yes") >= 0.3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length;i<l;++i) {
    if ( gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariableBoolean(gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.teste1Code.GDaudio_9595on_9595offObjects1[k] = gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i];
        ++k;
    }
}
gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12364980);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.teste1Code.GDaudio_9595on_9595offObjects1 */
{for(var i = 0, len = gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length ;i < len;++i) {
    gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].setVariableBoolean(gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariables().getFromIndex(0), true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "yes");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("audio_on_off"), gdjs.teste1Code.GDaudio_9595on_9595offObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "yes") >= 0.3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length;i<l;++i) {
    if ( gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariableBoolean(gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.teste1Code.GDaudio_9595on_9595offObjects1[k] = gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i];
        ++k;
    }
}
gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12366564);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.teste1Code.GDaudio_9595on_9595offObjects1 */
{for(var i = 0, len = gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length ;i < len;++i) {
    gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].setVariableBoolean(gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariables().getFromIndex(0), false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "yes");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("audio_on_off"), gdjs.teste1Code.GDaudio_9595on_9595offObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length;i<l;++i) {
    if ( gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariableBoolean(gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.teste1Code.GDaudio_9595on_9595offObjects1[k] = gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i];
        ++k;
    }
}
gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.teste1Code.GDaudio_9595on_9595offObjects1 */
{for(var i = 0, len = gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length ;i < len;++i) {
    gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getBehavior("Animation").setAnimationName("on");
}
}}

}


{


gdjs.teste1Code.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("audio_on_off"), gdjs.teste1Code.GDaudio_9595on_9595offObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length;i<l;++i) {
    if ( gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariableBoolean(gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.teste1Code.GDaudio_9595on_9595offObjects1[k] = gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i];
        ++k;
    }
}
gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.teste1Code.GDaudio_9595on_9595offObjects1 */
{for(var i = 0, len = gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length ;i < len;++i) {
    gdjs.teste1Code.GDaudio_9595on_9595offObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}}

}


};

gdjs.teste1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.teste1Code.GDfundoObjects1.length = 0;
gdjs.teste1Code.GDfundoObjects2.length = 0;
gdjs.teste1Code.GDfundoObjects3.length = 0;
gdjs.teste1Code.GDfundoObjects4.length = 0;
gdjs.teste1Code.GDbot_95227o_9595comumObjects1.length = 0;
gdjs.teste1Code.GDbot_95227o_9595comumObjects2.length = 0;
gdjs.teste1Code.GDbot_95227o_9595comumObjects3.length = 0;
gdjs.teste1Code.GDbot_95227o_9595comumObjects4.length = 0;
gdjs.teste1Code.GDaudio_9595on_9595offObjects1.length = 0;
gdjs.teste1Code.GDaudio_9595on_9595offObjects2.length = 0;
gdjs.teste1Code.GDaudio_9595on_9595offObjects3.length = 0;
gdjs.teste1Code.GDaudio_9595on_9595offObjects4.length = 0;
gdjs.teste1Code.GDbot_95227o_9595comum2Objects1.length = 0;
gdjs.teste1Code.GDbot_95227o_9595comum2Objects2.length = 0;
gdjs.teste1Code.GDbot_95227o_9595comum2Objects3.length = 0;
gdjs.teste1Code.GDbot_95227o_9595comum2Objects4.length = 0;
gdjs.teste1Code.GDbot_95227o_9595comum3Objects1.length = 0;
gdjs.teste1Code.GDbot_95227o_9595comum3Objects2.length = 0;
gdjs.teste1Code.GDbot_95227o_9595comum3Objects3.length = 0;
gdjs.teste1Code.GDbot_95227o_9595comum3Objects4.length = 0;
gdjs.teste1Code.GDSoundButtonObjects1.length = 0;
gdjs.teste1Code.GDSoundButtonObjects2.length = 0;
gdjs.teste1Code.GDSoundButtonObjects3.length = 0;
gdjs.teste1Code.GDSoundButtonObjects4.length = 0;

gdjs.teste1Code.eventsList2(runtimeScene);

return;

}

gdjs['teste1Code'] = gdjs.teste1Code;
