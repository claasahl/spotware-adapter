import { Transform, TransformCallback } from "stream";
import * as $ from "@claasahl/spotware-protobuf";
import Pbf from "pbf";

import * as util from "./spotware-utils";
import { ProtoMessages } from "./spotware-messages";

function toProtoMessage(data: Buffer): ProtoMessages {
  const { clientMsgId, payloadType, payload } = util.deserialize(data);
  const pbf = new Pbf(payload);
  switch (payloadType) {
    case 5:
      return {
        payloadType: 5,
        payload: $.ProtoMessageUtils.read(pbf),
        clientMsgId,
      };
    case 50:
      return {
        payloadType: 50,
        payload: $.ProtoErrorResUtils.read(pbf),
        clientMsgId,
      };
    case 51:
      return {
        payloadType: 51,
        payload: $.ProtoHeartbeatEventUtils.read(pbf),
        clientMsgId,
      };
    case 2100:
      return {
        payloadType: 2100,
        payload: $.ProtoOAApplicationAuthReqUtils.read(pbf),
        clientMsgId,
      };

    case 2101:
      return {
        payloadType: 2101,
        payload: $.ProtoOAApplicationAuthResUtils.read(pbf),
        clientMsgId,
      };

    case 2102:
      return {
        payloadType: 2102,
        payload: $.ProtoOAAccountAuthReqUtils.read(pbf),
        clientMsgId,
      };

    case 2103:
      return {
        payloadType: 2103,
        payload: $.ProtoOAAccountAuthResUtils.read(pbf),
        clientMsgId,
      };

    case 2104:
      return {
        payloadType: 2104,
        payload: $.ProtoOAVersionReqUtils.read(pbf),
        clientMsgId,
      };

    case 2105:
      return {
        payloadType: 2105,
        payload: $.ProtoOAVersionResUtils.read(pbf),
        clientMsgId,
      };

    case 2106:
      return {
        payloadType: 2106,
        payload: $.ProtoOANewOrderReqUtils.read(pbf),
        clientMsgId,
      };

    case 2107:
      return {
        payloadType: 2107,
        payload: $.ProtoOATrailingSLChangedEventUtils.read(pbf),
        clientMsgId,
      };

    case 2108:
      return {
        payloadType: 2108,
        payload: $.ProtoOACancelOrderReqUtils.read(pbf),
        clientMsgId,
      };

    case 2109:
      return {
        payloadType: 2109,
        payload: $.ProtoOAAmendOrderReqUtils.read(pbf),
        clientMsgId,
      };

    case 2110:
      return {
        payloadType: 2110,
        payload: $.ProtoOAAmendPositionSLTPReqUtils.read(pbf),
        clientMsgId,
      };

    case 2111:
      return {
        payloadType: 2111,
        payload: $.ProtoOAClosePositionReqUtils.read(pbf),
        clientMsgId,
      };

    case 2112:
      return {
        payloadType: 2112,
        payload: $.ProtoOAAssetListReqUtils.read(pbf),
        clientMsgId,
      };

    case 2113:
      return {
        payloadType: 2113,
        payload: $.ProtoOAAssetListResUtils.read(pbf),
        clientMsgId,
      };

    case 2114:
      return {
        payloadType: 2114,
        payload: $.ProtoOASymbolsListReqUtils.read(pbf),
        clientMsgId,
      };

    case 2115:
      return {
        payloadType: 2115,
        payload: $.ProtoOASymbolsListResUtils.read(pbf),
        clientMsgId,
      };

    case 2116:
      return {
        payloadType: 2116,
        payload: $.ProtoOASymbolByIdReqUtils.read(pbf),
        clientMsgId,
      };

    case 2117:
      return {
        payloadType: 2117,
        payload: $.ProtoOASymbolByIdResUtils.read(pbf),
        clientMsgId,
      };

    case 2118:
      return {
        payloadType: 2118,
        payload: $.ProtoOASymbolsForConversionReqUtils.read(pbf),
        clientMsgId,
      };

    case 2119:
      return {
        payloadType: 2119,
        payload: $.ProtoOASymbolsForConversionResUtils.read(pbf),
        clientMsgId,
      };

    case 2120:
      return {
        payloadType: 2120,
        payload: $.ProtoOASymbolChangedEventUtils.read(pbf),
        clientMsgId,
      };

    case 2121:
      return {
        payloadType: 2121,
        payload: $.ProtoOATraderReqUtils.read(pbf),
        clientMsgId,
      };

    case 2122:
      return {
        payloadType: 2122,
        payload: $.ProtoOATraderResUtils.read(pbf),
        clientMsgId,
      };

    case 2123:
      return {
        payloadType: 2123,
        payload: $.ProtoOATraderUpdatedEventUtils.read(pbf),
        clientMsgId,
      };

    case 2124:
      return {
        payloadType: 2124,
        payload: $.ProtoOAReconcileReqUtils.read(pbf),
        clientMsgId,
      };

    case 2125:
      return {
        payloadType: 2125,
        payload: $.ProtoOAReconcileResUtils.read(pbf),
        clientMsgId,
      };

    case 2126:
      return {
        payloadType: 2126,
        payload: $.ProtoOAExecutionEventUtils.read(pbf),
        clientMsgId,
      };

    case 2127:
      return {
        payloadType: 2127,
        payload: $.ProtoOASubscribeSpotsReqUtils.read(pbf),
        clientMsgId,
      };

    case 2128:
      return {
        payloadType: 2128,
        payload: $.ProtoOASubscribeSpotsResUtils.read(pbf),
        clientMsgId,
      };

    case 2129:
      return {
        payloadType: 2129,
        payload: $.ProtoOAUnsubscribeSpotsReqUtils.read(pbf),
        clientMsgId,
      };

    case 2130:
      return {
        payloadType: 2130,
        payload: $.ProtoOAUnsubscribeSpotsResUtils.read(pbf),
        clientMsgId,
      };

    case 2131:
      return {
        payloadType: 2131,
        payload: $.ProtoOASpotEventUtils.read(pbf),
        clientMsgId,
      };

    case 2132:
      return {
        payloadType: 2132,
        payload: $.ProtoOAOrderErrorEventUtils.read(pbf),
        clientMsgId,
      };

    case 2133:
      return {
        payloadType: 2133,
        payload: $.ProtoOADealListReqUtils.read(pbf),
        clientMsgId,
      };

    case 2134:
      return {
        payloadType: 2134,
        payload: $.ProtoOADealListResUtils.read(pbf),
        clientMsgId,
      };

    case 2135:
      return {
        payloadType: 2135,
        payload: $.ProtoOASubscribeLiveTrendbarReqUtils.read(pbf),
        clientMsgId,
      };

    case 2136:
      return {
        payloadType: 2136,
        payload: $.ProtoOAUnsubscribeLiveTrendbarReqUtils.read(pbf),
        clientMsgId,
      };

    case 2137:
      return {
        payloadType: 2137,
        payload: $.ProtoOAGetTrendbarsReqUtils.read(pbf),
        clientMsgId,
      };

    case 2138:
      return {
        payloadType: 2138,
        payload: $.ProtoOAGetTrendbarsResUtils.read(pbf),
        clientMsgId,
      };

    case 2139:
      return {
        payloadType: 2139,
        payload: $.ProtoOAExpectedMarginReqUtils.read(pbf),
        clientMsgId,
      };

    case 2140:
      return {
        payloadType: 2140,
        payload: $.ProtoOAExpectedMarginResUtils.read(pbf),
        clientMsgId,
      };

    case 2141:
      return {
        payloadType: 2141,
        payload: $.ProtoOAMarginChangedEventUtils.read(pbf),
        clientMsgId,
      };

    case 2142:
      return {
        payloadType: 2142,
        payload: $.ProtoOAErrorResUtils.read(pbf),
        clientMsgId,
      };

    case 2143:
      return {
        payloadType: 2143,
        payload: $.ProtoOACashFlowHistoryListReqUtils.read(pbf),
        clientMsgId,
      };

    case 2144:
      return {
        payloadType: 2144,
        payload: $.ProtoOACashFlowHistoryListResUtils.read(pbf),
        clientMsgId,
      };

    case 2145:
      return {
        payloadType: 2145,
        payload: $.ProtoOAGetTickDataReqUtils.read(pbf),
        clientMsgId,
      };

    case 2146:
      return {
        payloadType: 2146,
        payload: $.ProtoOAGetTickDataResUtils.read(pbf),
        clientMsgId,
      };

    case 2147:
      return {
        payloadType: 2147,
        payload: $.ProtoOAAccountsTokenInvalidatedEventUtils.read(pbf),
        clientMsgId,
      };

    case 2148:
      return {
        payloadType: 2148,
        payload: $.ProtoOAClientDisconnectEventUtils.read(pbf),
        clientMsgId,
      };

    case 2149:
      return {
        payloadType: 2149,
        payload: $.ProtoOAGetAccountListByAccessTokenReqUtils.read(pbf),
        clientMsgId,
      };

    case 2150:
      return {
        payloadType: 2150,
        payload: $.ProtoOAGetAccountListByAccessTokenResUtils.read(pbf),
        clientMsgId,
      };

    case 2151:
      return {
        payloadType: 2151,
        payload: $.ProtoOAGetCtidProfileByTokenReqUtils.read(pbf),
        clientMsgId,
      };

    case 2152:
      return {
        payloadType: 2152,
        payload: $.ProtoOAGetCtidProfileByTokenResUtils.read(pbf),
        clientMsgId,
      };

    case 2153:
      return {
        payloadType: 2153,
        payload: $.ProtoOAAssetClassListReqUtils.read(pbf),
        clientMsgId,
      };

    case 2154:
      return {
        payloadType: 2154,
        payload: $.ProtoOAAssetClassListResUtils.read(pbf),
        clientMsgId,
      };

    case 2155:
      return {
        payloadType: 2155,
        payload: $.ProtoOADepthEventUtils.read(pbf),
        clientMsgId,
      };

    case 2156:
      return {
        payloadType: 2156,
        payload: $.ProtoOASubscribeDepthQuotesReqUtils.read(pbf),
        clientMsgId,
      };

    case 2157:
      return {
        payloadType: 2157,
        payload: $.ProtoOASubscribeDepthQuotesResUtils.read(pbf),
        clientMsgId,
      };

    case 2158:
      return {
        payloadType: 2158,
        payload: $.ProtoOAUnsubscribeDepthQuotesReqUtils.read(pbf),
        clientMsgId,
      };

    case 2159:
      return {
        payloadType: 2159,
        payload: $.ProtoOAUnsubscribeDepthQuotesResUtils.read(pbf),
        clientMsgId,
      };

    case 2160:
      return {
        payloadType: 2160,
        payload: $.ProtoOASymbolCategoryListReqUtils.read(pbf),
        clientMsgId,
      };

    case 2161:
      return {
        payloadType: 2161,
        payload: $.ProtoOASymbolCategoryListResUtils.read(pbf),
        clientMsgId,
      };

    case 2162:
      return {
        payloadType: 2162,
        payload: $.ProtoOAAccountLogoutReqUtils.read(pbf),
        clientMsgId,
      };

    case 2163:
      return {
        payloadType: 2163,
        payload: $.ProtoOAAccountLogoutResUtils.read(pbf),
        clientMsgId,
      };

    case 2164:
      return {
        payloadType: 2164,
        payload: $.ProtoOAAccountDisconnectEventUtils.read(pbf),
        clientMsgId,
      };

    case 2165:
      return {
        payloadType: 2165,
        payload: $.ProtoOASubscribeLiveTrendbarResUtils.read(pbf),
        clientMsgId,
      };

    case 2166:
      return {
        payloadType: 2166,
        payload: $.ProtoOAUnsubscribeLiveTrendbarResUtils.read(pbf),
        clientMsgId,
      };

    case 2167:
      return {
        payloadType: 2167,
        payload: $.ProtoOAMarginCallListReqUtils.read(pbf),
        clientMsgId,
      };

    case 2168:
      return {
        payloadType: 2168,
        payload: $.ProtoOAMarginCallListResUtils.read(pbf),
        clientMsgId,
      };

    case 2169:
      return {
        payloadType: 2169,
        payload: $.ProtoOAMarginCallUpdateReqUtils.read(pbf),
        clientMsgId,
      };

    case 2170:
      return {
        payloadType: 2170,
        payload: $.ProtoOAMarginCallUpdateResUtils.read(pbf),
        clientMsgId,
      };

    case 2171:
      return {
        payloadType: 2171,
        payload: $.ProtoOAMarginCallUpdateEventUtils.read(pbf),
        clientMsgId,
      };

    case 2172:
      return {
        payloadType: 2172,
        payload: $.ProtoOAMarginCallTriggerEventUtils.read(pbf),
        clientMsgId,
      };

    case 2173:
      return {
        payloadType: 2173,
        payload: $.ProtoOARefreshTokenReqUtils.read(pbf),
        clientMsgId,
      };

    case 2174:
      return {
        payloadType: 2174,
        payload: $.ProtoOARefreshTokenResUtils.read(pbf),
        clientMsgId,
      };
  }
  throw new Error(`unknown payloadType ${payloadType}`);
}

function fromProtoMessage(message: ProtoMessages): Buffer {
  const pbf = new Pbf();
  switch (message.payloadType) {
    case 5:
      $.ProtoMessageUtils.write(message.payload, pbf);
      break;
    case 50:
      $.ProtoErrorResUtils.write(message.payload, pbf);
      break;
    case 51:
      $.ProtoHeartbeatEventUtils.write(message.payload, pbf);
      break;
    case 2100:
      $.ProtoOAApplicationAuthReqUtils.write(message.payload, pbf);
      break;
    case 2101:
      $.ProtoOAApplicationAuthResUtils.write(message.payload, pbf);
      break;
    case 2102:
      $.ProtoOAAccountAuthReqUtils.write(message.payload, pbf);
      break;
    case 2103:
      $.ProtoOAAccountAuthResUtils.write(message.payload, pbf);
      break;
    case 2104:
      $.ProtoOAVersionReqUtils.write(message.payload, pbf);
      break;
    case 2105:
      $.ProtoOAVersionResUtils.write(message.payload, pbf);
      break;
    case 2106:
      $.ProtoOANewOrderReqUtils.write(message.payload, pbf);
      break;
    case 2107:
      $.ProtoOATrailingSLChangedEventUtils.write(message.payload, pbf);
      break;
    case 2108:
      $.ProtoOACancelOrderReqUtils.write(message.payload, pbf);
      break;
    case 2109:
      $.ProtoOAAmendOrderReqUtils.write(message.payload, pbf);
      break;
    case 2110:
      $.ProtoOAAmendPositionSLTPReqUtils.write(message.payload, pbf);
      break;
    case 2111:
      $.ProtoOAClosePositionReqUtils.write(message.payload, pbf);
      break;
    case 2112:
      $.ProtoOAAssetListReqUtils.write(message.payload, pbf);
      break;
    case 2113:
      $.ProtoOAAssetListResUtils.write(message.payload, pbf);
      break;
    case 2114:
      $.ProtoOASymbolsListReqUtils.write(message.payload, pbf);
      break;
    case 2115:
      $.ProtoOASymbolsListResUtils.write(message.payload, pbf);
      break;
    case 2116:
      $.ProtoOASymbolByIdReqUtils.write(message.payload, pbf);
      break;
    case 2117:
      $.ProtoOASymbolByIdResUtils.write(message.payload, pbf);
      break;
    case 2118:
      $.ProtoOASymbolsForConversionReqUtils.write(message.payload, pbf);
      break;
    case 2119:
      $.ProtoOASymbolsForConversionResUtils.write(message.payload, pbf);
      break;
    case 2120:
      $.ProtoOASymbolChangedEventUtils.write(message.payload, pbf);
      break;
    case 2121:
      $.ProtoOATraderReqUtils.write(message.payload, pbf);
      break;
    case 2122:
      $.ProtoOATraderResUtils.write(message.payload, pbf);
      break;
    case 2123:
      $.ProtoOATraderUpdatedEventUtils.write(message.payload, pbf);
      break;
    case 2124:
      $.ProtoOAReconcileReqUtils.write(message.payload, pbf);
      break;
    case 2125:
      $.ProtoOAReconcileResUtils.write(message.payload, pbf);
      break;
    case 2126:
      $.ProtoOAExecutionEventUtils.write(message.payload, pbf);
      break;
    case 2127:
      $.ProtoOASubscribeSpotsReqUtils.write(message.payload, pbf);
      break;
    case 2128:
      $.ProtoOASubscribeSpotsResUtils.write(message.payload, pbf);
      break;
    case 2129:
      $.ProtoOAUnsubscribeSpotsReqUtils.write(message.payload, pbf);
      break;
    case 2130:
      $.ProtoOAUnsubscribeSpotsResUtils.write(message.payload, pbf);
      break;
    case 2131:
      $.ProtoOASpotEventUtils.write(message.payload, pbf);
      break;
    case 2132:
      $.ProtoOAOrderErrorEventUtils.write(message.payload, pbf);
      break;
    case 2133:
      $.ProtoOADealListReqUtils.write(message.payload, pbf);
      break;
    case 2134:
      $.ProtoOADealListResUtils.write(message.payload, pbf);
      break;
    case 2135:
      $.ProtoOASubscribeLiveTrendbarReqUtils.write(message.payload, pbf);
      break;
    case 2136:
      $.ProtoOAUnsubscribeLiveTrendbarReqUtils.write(message.payload, pbf);
      break;
    case 2137:
      $.ProtoOAGetTrendbarsReqUtils.write(message.payload, pbf);
      break;
    case 2138:
      $.ProtoOAGetTrendbarsResUtils.write(message.payload, pbf);
      break;
    case 2139:
      $.ProtoOAExpectedMarginReqUtils.write(message.payload, pbf);
      break;
    case 2140:
      $.ProtoOAExpectedMarginResUtils.write(message.payload, pbf);
      break;
    case 2141:
      $.ProtoOAMarginChangedEventUtils.write(message.payload, pbf);
      break;
    case 2142:
      $.ProtoOAErrorResUtils.write(message.payload, pbf);
      break;
    case 2143:
      $.ProtoOACashFlowHistoryListReqUtils.write(message.payload, pbf);
      break;
    case 2144:
      $.ProtoOACashFlowHistoryListResUtils.write(message.payload, pbf);
      break;
    case 2145:
      $.ProtoOAGetTickDataReqUtils.write(message.payload, pbf);
      break;
    case 2146:
      $.ProtoOAGetTickDataResUtils.write(message.payload, pbf);
      break;
    case 2147:
      $.ProtoOAAccountsTokenInvalidatedEventUtils.write(message.payload, pbf);
      break;
    case 2148:
      $.ProtoOAClientDisconnectEventUtils.write(message.payload, pbf);
      break;
    case 2149:
      $.ProtoOAGetAccountListByAccessTokenReqUtils.write(message.payload, pbf);
      break;
    case 2150:
      $.ProtoOAGetAccountListByAccessTokenResUtils.write(message.payload, pbf);
      break;
    case 2151:
      $.ProtoOAGetCtidProfileByTokenReqUtils.write(message.payload, pbf);
      break;
    case 2152:
      $.ProtoOAGetCtidProfileByTokenResUtils.write(message.payload, pbf);
      break;
    case 2153:
      $.ProtoOAAssetClassListReqUtils.write(message.payload, pbf);
      break;
    case 2154:
      $.ProtoOAAssetClassListResUtils.write(message.payload, pbf);
      break;
    case 2155:
      $.ProtoOADepthEventUtils.write(message.payload, pbf);
      break;
    case 2156:
      $.ProtoOASubscribeDepthQuotesReqUtils.write(message.payload, pbf);
      break;
    case 2157:
      $.ProtoOASubscribeDepthQuotesResUtils.write(message.payload, pbf);
      break;
    case 2158:
      $.ProtoOAUnsubscribeDepthQuotesReqUtils.write(message.payload, pbf);
      break;
    case 2159:
      $.ProtoOAUnsubscribeDepthQuotesResUtils.write(message.payload, pbf);
      break;
    case 2160:
      $.ProtoOASymbolCategoryListReqUtils.write(message.payload, pbf);
      break;
    case 2161:
      $.ProtoOASymbolCategoryListResUtils.write(message.payload, pbf);
      break;
    case 2162:
      $.ProtoOAAccountLogoutReqUtils.write(message.payload, pbf);
      break;
    case 2163:
      $.ProtoOAAccountLogoutResUtils.write(message.payload, pbf);
      break;
    case 2164:
      $.ProtoOAAccountDisconnectEventUtils.write(message.payload, pbf);
      break;
    case 2165:
      $.ProtoOASubscribeLiveTrendbarResUtils.write(message.payload, pbf);
      break;
    case 2166:
      $.ProtoOAUnsubscribeLiveTrendbarResUtils.write(message.payload, pbf);
      break;
    case 2167:
      $.ProtoOAMarginCallListReqUtils.write(message.payload, pbf);
      break;
    case 2168:
      $.ProtoOAMarginCallListResUtils.write(message.payload, pbf);
      break;
    case 2169:
      $.ProtoOAMarginCallUpdateReqUtils.write(message.payload, pbf);
      break;
    case 2170:
      $.ProtoOAMarginCallUpdateResUtils.write(message.payload, pbf);
      break;
    case 2171:
      $.ProtoOAMarginCallUpdateEventUtils.write(message.payload, pbf);
      break;
    case 2172:
      $.ProtoOAMarginCallTriggerEventUtils.write(message.payload, pbf);
      break;
    case 2173:
      $.ProtoOARefreshTokenReqUtils.write(message.payload, pbf);
      break;
    case 2174:
      $.ProtoOARefreshTokenResUtils.write(message.payload, pbf);
      break;
  }
  return util.serialize({
    ...message,
    payload: pbf.finish(),
  });
}

export class BinaryToSpotware extends Transform {
  constructor() {
    super({ readableObjectMode: true, defaultEncoding: "binary" });
  }
  _transform(
    chunk: any,
    encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    if (!Buffer.isBuffer(chunk)) {
      return;
    }
    const msg = toProtoMessage(chunk);
    console.log("BinaryToSpotware", encoding, msg);
    callback(null, msg);
  }
}
export class SpotwareToBinary extends Transform {
  constructor() {
    super({ writableObjectMode: true, defaultEncoding: "binary" });
  }
  _transform(
    chunk: any,
    encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    const msg = chunk as ProtoMessages;
    const data = fromProtoMessage(msg);
    console.log("SpotwareToBinary", encoding, data);
    callback(null, data);
  }
}
