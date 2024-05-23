let allSensorData = [];
allSensorData.push({device_id: "Test", latestFetch: 0, data: [{light:53, humidity: 69, vibration: 12, time: 1716434158},{light:69, humidity: 53, vibration: 4, time: 1716434300}]})




export function updateSensorData(newData){
    const device = allSensorData.find((i) => i.device_id == newData.device_id);
    const currentTime = Math.floor(Date.now()/1000);
    const newDataWithTime = newData;
    newDataWithTime.time = currentTime;
    if (device === undefined){
        allSensorData.push({device_id: newData.device_id,latestFetch: currentTime, data: [newDataWithTime]});
    }
    else {
        if (currentTime - device.latestFetch > 20){
            device.latestFetch = currentTime;
            device.data.push(newDataWithTime);
        }
    }
}

// const currentTime = Math.floor(Date.now()/1000);
//     if (currentTime - lastestFetchTime < 600){
//         return idDetail;
//     }

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


