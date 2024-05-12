let allSensorData = [];

export function updateSensorData(newData){
    newData.device_id = newData.device_id.toString();
    const newAllSensorData = allSensorData.map((i) => i.device_id != newData.device_id);
    newAllSensorData.push(newData);
    allSensorData = newAllSensorData;
}

export function getSensorData(device_id){
    device_id = device_id.toString();
    const sensorData = allSensorData.find((i) => i.device_id == device_id);
    return sensorData;
}


