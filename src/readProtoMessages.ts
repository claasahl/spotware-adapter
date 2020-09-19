import tls from "tls";
import Pbf from "pbf";
import * as $ from "@claasahl/spotware-protobuf";

import * as util from "./spotware-utils";
import { ProtoMessages } from "./spotware-messages";

export function read(data: Buffer): ProtoMessages {
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

export default function readProtoMessage(
  socket: tls.TLSSocket,
  message: $.ProtoMessage,
  namespace?: string
): void {
  const msg: {
    clientMsgId?: string;
    payloadType: number;
    payload: any;
  } = {
    clientMsgId: message.clientMsgId,
    payloadType: message.payloadType,
    payload: message.payload,
  };
  switch (message.payloadType) {
    case 5:
      msg.payload = $.ProtoMessageUtils.read(new Pbf(message.payload));
      break;
    case 50:
      msg.payload = $.ProtoErrorResUtils.read(new Pbf(message.payload));
      break;
    case 51:
      msg.payload = $.ProtoHeartbeatEventUtils.read(new Pbf(message.payload));
      break;
    case 2100:
      msg.payload = $.ProtoOAApplicationAuthReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2101:
      msg.payload = $.ProtoOAApplicationAuthResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2102:
      msg.payload = $.ProtoOAAccountAuthReqUtils.read(new Pbf(message.payload));
      break;
    case 2103:
      msg.payload = $.ProtoOAAccountAuthResUtils.read(new Pbf(message.payload));
      break;
    case 2104:
      msg.payload = $.ProtoOAVersionReqUtils.read(new Pbf(message.payload));
      break;
    case 2105:
      msg.payload = $.ProtoOAVersionResUtils.read(new Pbf(message.payload));
      break;
    case 2106:
      msg.payload = $.ProtoOANewOrderReqUtils.read(new Pbf(message.payload));
      break;
    case 2107:
      msg.payload = $.ProtoOATrailingSLChangedEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2108:
      msg.payload = $.ProtoOACancelOrderReqUtils.read(new Pbf(message.payload));
      break;
    case 2109:
      msg.payload = $.ProtoOAAmendOrderReqUtils.read(new Pbf(message.payload));
      break;
    case 2110:
      msg.payload = $.ProtoOAAmendPositionSLTPReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2111:
      msg.payload = $.ProtoOAClosePositionReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2112:
      msg.payload = $.ProtoOAAssetListReqUtils.read(new Pbf(message.payload));
      break;
    case 2113:
      msg.payload = $.ProtoOAAssetListResUtils.read(new Pbf(message.payload));
      break;
    case 2114:
      msg.payload = $.ProtoOASymbolsListReqUtils.read(new Pbf(message.payload));
      break;
    case 2115:
      msg.payload = $.ProtoOASymbolsListResUtils.read(new Pbf(message.payload));
      break;
    case 2116:
      msg.payload = $.ProtoOASymbolByIdReqUtils.read(new Pbf(message.payload));
      break;
    case 2117:
      msg.payload = $.ProtoOASymbolByIdResUtils.read(new Pbf(message.payload));
      break;
    case 2118:
      msg.payload = $.ProtoOASymbolsForConversionReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2119:
      msg.payload = $.ProtoOASymbolsForConversionResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2120:
      msg.payload = $.ProtoOASymbolChangedEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2121:
      msg.payload = $.ProtoOATraderReqUtils.read(new Pbf(message.payload));
      break;
    case 2122:
      msg.payload = $.ProtoOATraderResUtils.read(new Pbf(message.payload));
      break;
    case 2123:
      msg.payload = $.ProtoOATraderUpdatedEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2124:
      msg.payload = $.ProtoOAReconcileReqUtils.read(new Pbf(message.payload));
      break;
    case 2125:
      msg.payload = $.ProtoOAReconcileResUtils.read(new Pbf(message.payload));
      break;
    case 2126:
      msg.payload = $.ProtoOAExecutionEventUtils.read(new Pbf(message.payload));
      break;
    case 2127:
      msg.payload = $.ProtoOASubscribeSpotsReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2128:
      msg.payload = $.ProtoOASubscribeSpotsResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2129:
      msg.payload = $.ProtoOAUnsubscribeSpotsReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2130:
      msg.payload = $.ProtoOAUnsubscribeSpotsResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2131:
      msg.payload = $.ProtoOASpotEventUtils.read(new Pbf(message.payload));
      break;
    case 2132:
      msg.payload = $.ProtoOAOrderErrorEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2133:
      msg.payload = $.ProtoOADealListReqUtils.read(new Pbf(message.payload));
      break;
    case 2134:
      msg.payload = $.ProtoOADealListResUtils.read(new Pbf(message.payload));
      break;
    case 2135:
      msg.payload = $.ProtoOASubscribeLiveTrendbarReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2136:
      msg.payload = $.ProtoOAUnsubscribeLiveTrendbarReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2137:
      msg.payload = $.ProtoOAGetTrendbarsReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2138:
      msg.payload = $.ProtoOAGetTrendbarsResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2139:
      msg.payload = $.ProtoOAExpectedMarginReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2140:
      msg.payload = $.ProtoOAExpectedMarginResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2141:
      msg.payload = $.ProtoOAMarginChangedEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2142:
      msg.payload = $.ProtoOAErrorResUtils.read(new Pbf(message.payload));
      break;
    case 2143:
      msg.payload = $.ProtoOACashFlowHistoryListReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2144:
      msg.payload = $.ProtoOACashFlowHistoryListResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2145:
      msg.payload = $.ProtoOAGetTickDataReqUtils.read(new Pbf(message.payload));
      break;
    case 2146:
      msg.payload = $.ProtoOAGetTickDataResUtils.read(new Pbf(message.payload));
      break;
    case 2147:
      msg.payload = $.ProtoOAAccountsTokenInvalidatedEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2148:
      msg.payload = $.ProtoOAClientDisconnectEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2149:
      msg.payload = $.ProtoOAGetAccountListByAccessTokenReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2150:
      msg.payload = $.ProtoOAGetAccountListByAccessTokenResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2151:
      msg.payload = $.ProtoOAGetCtidProfileByTokenReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2152:
      msg.payload = $.ProtoOAGetCtidProfileByTokenResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2153:
      msg.payload = $.ProtoOAAssetClassListReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2154:
      msg.payload = $.ProtoOAAssetClassListResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2155:
      msg.payload = $.ProtoOADepthEventUtils.read(new Pbf(message.payload));
      break;
    case 2156:
      msg.payload = $.ProtoOASubscribeDepthQuotesReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2157:
      msg.payload = $.ProtoOASubscribeDepthQuotesResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2158:
      msg.payload = $.ProtoOAUnsubscribeDepthQuotesReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2159:
      msg.payload = $.ProtoOAUnsubscribeDepthQuotesResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2160:
      msg.payload = $.ProtoOASymbolCategoryListReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2161:
      msg.payload = $.ProtoOASymbolCategoryListResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2162:
      msg.payload = $.ProtoOAAccountLogoutReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2163:
      msg.payload = $.ProtoOAAccountLogoutResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2164:
      msg.payload = $.ProtoOAAccountDisconnectEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2165:
      msg.payload = $.ProtoOASubscribeLiveTrendbarResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2166:
      msg.payload = $.ProtoOAUnsubscribeLiveTrendbarResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2167:
      msg.payload = $.ProtoOAMarginCallListReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2168:
      msg.payload = $.ProtoOAMarginCallListResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2169:
      msg.payload = $.ProtoOAMarginCallUpdateReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2170:
      msg.payload = $.ProtoOAMarginCallUpdateResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2171:
      msg.payload = $.ProtoOAMarginCallUpdateEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2172:
      msg.payload = $.ProtoOAMarginCallTriggerEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2173:
      msg.payload = $.ProtoOARefreshTokenReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case 2174:
      msg.payload = $.ProtoOARefreshTokenResUtils.read(
        new Pbf(message.payload)
      );
      break;
  }
  socket.emit("PROTO_MESSAGE.*", msg);
  socket.emit(`PROTO_MESSAGE.${message.payloadType}`, msg);
  if (namespace) {
    socket.emit(`PROTO_MESSAGE.${namespace}.*`, msg);
    socket.emit(`PROTO_MESSAGE.${namespace}.${message.payloadType}`, msg);
  }
}
