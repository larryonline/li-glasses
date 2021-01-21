import { MetaType, SchemeModel } from "../src/scheme/define";


export const MOCK_SCHEME_MODEL:SchemeModel = {
    name: "MOCK SCHEME",
    spec: "<datetime><pid><tid><level><tag>:<content>",
    meta: {
        datetime: {
            type: MetaType.DATETIME,
            spec: "MM-dd HH:mm:ss.SSS"  // by date-fns https://date-fns.org/v2.16.1/docs/parse
        },

        pid: {
            type: MetaType.INT
        },

        tid: {
            type: MetaType.INT
        },

        level: {
            type: MetaType.STRING,
            spec: "[VDIWEF]"
        },

        tag: {
            type: MetaType.STRING,
            spec: "[^:\\n]+(?=\\s*:\\s?)"
        },

        content: {
            type: MetaType.TEXT
        }
    }
}

export const MOCK_LOG = [
    '01-18 20:59:39.597  2474 12707 I IoT.CommsCallbackWorker: received message, messageId:3, payload length:113',
    '01-18 20:59:39.597  2474 12707 I IoT.MqttClientImpl: messageArrived: topic=veh/K1G1313MMRSQ8HCTRC61/shadow, id=0',
    '01-18 20:59:39.598  2474 12707 I IoT.MqttClientImpl: messageArrived messageId:-hK0fDWO_lbcpAXG080, serviceName:account.blekey-clear.req',
    '01-18 20:59:39.598  2474 12707 I IoT.MqttClientImpl: add messageId:-hK0fDWO_lbcpAXG080',
    '01-18 20:59:39.598  2474  2759 I IoT.MessageHostImpl: handleMessage: dispatch message : com.chehejia.iot.service.manager.MessageCache@9417b97',
    '01-18 20:59:39.598  2474  2759 I IoT.MessageHostImpl: dispatchMessage:account.blekey-clear.req， -hK0fDWO_lbcpAXG080',
    '01-18 20:59:39.599  2474  2759 I IoT.MessageHostImpl: --dispatch message -hK0fDWO_lbcpAXG080 to package com.chehejia.account.vehicle',
    '01-18 20:59:39.600  2631  4371 I IoT.MessageManagerImpl: --dispatched v50',
    '01-18 20:59:39.601  2474  2759 I IoT.MessageHostImpl: --publishDispatchedToAppMessage, msgId=-hK0fDWO_lbcpAXG080',
    '01-18 20:59:39.601  2631  4371 I AccountV2[EolDeleteBleKeychainBusinessPresenter]: [EOL: UPDATE BLE KEYCHAIN]: PUSH[account.blekey-clear.req]: ARRIVE[-hK0fDWO_lbcpAXG080]',
    '01-18 20:59:39.603  2631  4371 I AccountV2[EolDeleteBleKeychainBusinessPresenter]: [EOL: UPDATE BLE KEYCHAIN]: STEP[CHECK SUPPORT]: START',
    '01-18 20:59:39.603  2631  4371 I ChjCarVehicleInfoManager: get vehicle info id:8, return value:1,15,171,255,255,255,255,255,255,255,21,159,120,255,127,255,255',
    '01-18 20:59:39.603  2631  4371 I AccountV2[EolDeleteBleKeychainBusinessPresenter]: [EOL: UPDATE BLE KEYCHAIN]: STEP[CHECK SUPPORT]: PASS',
    '01-18 20:59:39.604  2631  4371 I AccountV2[EolDeleteBleKeychainBusinessPresenter]: [EOL: UPDATE BLE KEYCHAIN]: STEP[CHECK ACTIVATION]: START',
    '01-18 20:59:39.606  2631  4371 I AccountV2[EolDeleteBleKeychainBusinessPresenter]: [EOL: UPDATE BLE KEYCHAIN]: STEP[CHECK ACTIVATION]: PASS',
    '01-18 20:59:39.606  2631  4371 I AccountV2[EolDeleteBleKeychainBusinessPresenter]: [EOL: UPDATE BLE KEYCHAIN]: STEP[REMOVE LOCAL DATA]: START',
    '01-18 20:59:39.607  2631  4371 I ImplBleChipAPI: 清除蓝牙芯片中的蓝牙钥匙串数据',
    '01-18 20:59:39.609   638   638 I logerror: 131324',
    '01-18 20:59:39.609   638   638 I UDS_CLIENT: CUdsClient CleanKeyInformation HAL +',
    '01-18 20:59:39.613   638 13850 W DoIP    : [onEventData:381] eventType::ON_UDP_CHANNEL_DATA:getEventDataProcesser:eventDataProcesser.empty()',
    '01-18 20:59:39.618   638 13850 W DoIP    : [onEventData:381] eventType::ON_UDP_CHANNEL_DATA:getEventDataProcesser:eventDataProcesser.empty()',
    '01-18 20:59:39.633   618 12276 I hardware_radio_hw_NXP_tuner_i2c: MAIN AIDL Quality is-- current_freq = 9070, signal_level = 27, usn = 9, WAM = 18, bandwidth = 56, OFFSET = 24',
    '01-18 20:59:39.677  1940  1940 I TimeService: start service with action:ACTION_START_BY_APPLICATION',
    '01-18 20:59:39.678  1080  1573 I ActivityManager: Service already foreground; no new timeout: ServiceRecord{1a3be42 u0 com.chehejia.car.timesync/.TimeService}',
    '01-18 20:59:39.679  1940  1940 I TimeService: lifeCycle onStartCommand:Intent { act=ACTION_START_BY_APPLICATION cmp=com.chehejia.car.timesync/.TimeService } flag:0 startId:125',
    '01-18 20:59:39.679  1940  1940 I TimeService: setRunInForeground:true', 
    '01-18 20:59:39.749  2571 14070 I TripOneWareHouse: calculateTripOne',
];