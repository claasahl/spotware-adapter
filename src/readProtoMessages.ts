import tls from "tls";
import Pbf from "pbf";
import * as $ from "@claasahl/spotware-protobuf";

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
    payload: message.payload
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
  }
  socket.emit("PROTO_MESSAGE.*", msg);
  socket.emit(`PROTO_MESSAGE.${message.payloadType}`, msg);
  if (namespace) {
    socket.emit(`PROTO_MESSAGE.${namespace}.*`, msg);
    socket.emit(`PROTO_MESSAGE.${namespace}.${message.payloadType}`, msg);
  }
}
