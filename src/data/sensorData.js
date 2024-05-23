let allSensorData = [];
allSensorData.push({device_id: "Test", data: [{light:53, humidity: 69, vibration: 12, time: 1716434158},{light:69, humidity: 53, vibration: 4, time: 1716434300}]})

export function updateSensorData(newData){
    const device = allSensorData.find((i) => i.device_id == newData.device_id);
    const currentTime = Math.floor(Date.now()/1000);
    const newDataWithTime = newData;
    newDataWithTime.time = currentTime;
    if (device === undefined){
        allSensorData.push({device_id: newData.device_id, data: [newDataWithTime]});
    }
    else {
        device.data.push(newDataWithTime);
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


