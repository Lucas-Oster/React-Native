import React, { useState } from 'react';


import {
    SafeAreaView,

    Text,
    View,
    TouchableHighlight,
} from 'react-native';


import {Timer} from 'react-native-stopwatch-timer';

const App = () => {
    const [isTimerStart, setIsTimerStart] = useState(false);

    const [timerDuration] = useState(90000);
    const [resetTimer, setResetTimer] = useState(false);


    return (
        <SafeAreaView>
            <View>
                <Text>
                    My-Pomodoro
                </Text>
                <Text>
                    My-Pomodoro
                    Travail/pause
                </Text>

                <View>
                    <Timer
                        totalDuration={timerDuration}
                        msecs

                        start={isTimerStart}

                        reset={resetTimer}

                        getTime={(time) => {
                            console.log(time);
                        }}
                    />
                    <TouchableHighlight
                        onPress={() => {
                            setIsTimerStart(!isTimerStart);
                            setResetTimer(false);

                        }}>
                        <Text>
                            {!isTimerStart ? 'Play' : 'Pause'}
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            setIsTimerStart(false);
                            setResetTimer(true);
                        }}>
                        <Text >RESET</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default App;



