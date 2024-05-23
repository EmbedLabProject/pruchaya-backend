let allSensorData = [];
allSensorData.push({device_id: "Test", latestFetch: 0, data: [{light: 10, humidity: 10, vibration: 10, time: 1716434158},{light: 20, humidity: 20, vibration: 20, time: 1716434158},{light: 30, humidity: 30, vibration: 30, time: 1716434158},{light: 40, humidity: 40, vibration: 40, time: 1716434158},{light: 50, humidity: 50, vibration: 50, time: 1716434158},{light: 60, humidity: 60, vibration: 60, time: 1716434158},{light: 70, humidity: 70, vibration: 70, time: 1716434158},{light: 80, humidity: 80, vibration: 80, time: 1716434158},{light: 90, humidity: 90, vibration: 90, time: 1716434158},{light: 100, humidity: 100, vibration: 100, time: 1716434158},{light: 80, humidity: 0, vibration: 0, time: 1716434158},{light: 0, humidity: 80, vibration: 0, time: 1716434158},{light: 0, humidity: 0, vibration: 80, time: 1716434158}]})




export function updateSensorData(newData){
    const device = allSensorData.find((i) => i.device_id == newData.device_id);
    const currentTime = Math.floor(Date.now()/1000);
    const newDataWithTime = newData;
    newDataWithTime.time = currentTime;
    if (device === undefined){
        allSensorData.push({device_id: newData.device_id,latestFetch: currentTime, data: [newDataWithTime]});
    }
    else {
        if (currentTime - device.latestFetch >= 20){
            device.latestFetch = currentTime;
            device.data.push(newDataWithTime);
        }
        if (device.data.length > 100){
            device.data = device.data.slice(70);
        }
    }
}



export function getSensorData(device_id){
    device_id = device_id.toString();
    const sensorData = allSensorData.find((i) => i.device_id == device_id);
    if (sensorData === undefined){
        return {device_id: device_id, data: []};
    }
    else {
        return sensorData;
    }
}


