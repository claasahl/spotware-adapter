/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ProtoMessage = (function() {
  /**
   * Properties of a ProtoMessage.
   * @exports IProtoMessage
   * @interface IProtoMessage
   * @property {number} payloadType ProtoMessage payloadType
   * @property {Uint8Array|null} [payload] ProtoMessage payload
   * @property {string|null} [clientMsgId] ProtoMessage clientMsgId
   */

  /**
   * Constructs a new ProtoMessage.
   * @exports ProtoMessage
   * @classdesc Represents a ProtoMessage.
   * @implements IProtoMessage
   * @constructor
   * @param {IProtoMessage=} [properties] Properties to set
   */
  function ProtoMessage(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoMessage payloadType.
   * @member {number} payloadType
   * @memberof ProtoMessage
   * @instance
   */
  ProtoMessage.prototype.payloadType = 0;

  /**
   * ProtoMessage payload.
   * @member {Uint8Array} payload
   * @memberof ProtoMessage
   * @instance
   */
  ProtoMessage.prototype.payload = $util.newBuffer([]);

  /**
   * ProtoMessage clientMsgId.
   * @member {string} clientMsgId
   * @memberof ProtoMessage
   * @instance
   */
  ProtoMessage.prototype.clientMsgId = "";

  /**
   * Creates a new ProtoMessage instance using the specified properties.
   * @function create
   * @memberof ProtoMessage
   * @static
   * @param {IProtoMessage=} [properties] Properties to set
   * @returns {ProtoMessage} ProtoMessage instance
   */
  ProtoMessage.create = function create(properties) {
    return new ProtoMessage(properties);
  };

  /**
   * Encodes the specified ProtoMessage message. Does not implicitly {@link ProtoMessage.verify|verify} messages.
   * @function encode
   * @memberof ProtoMessage
   * @static
   * @param {IProtoMessage} message ProtoMessage message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoMessage.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.payloadType);
    if (message.payload != null && message.hasOwnProperty("payload"))
      writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.payload);
    if (message.clientMsgId != null && message.hasOwnProperty("clientMsgId"))
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.clientMsgId);
    return writer;
  };

  /**
   * Decodes a ProtoMessage message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoMessage
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoMessage} ProtoMessage
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoMessage.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoMessage();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.uint32();
          break;
        case 2:
          message.payload = reader.bytes();
          break;
        case 3:
          message.clientMsgId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("payloadType"))
      throw $util.ProtocolError("missing required 'payloadType'", {
        instance: message
      });
    return message;
  };

  return ProtoMessage;
})();

$root.ProtoErrorRes = (function() {
  /**
   * Properties of a ProtoErrorRes.
   * @exports IProtoErrorRes
   * @interface IProtoErrorRes
   * @property {ProtoPayloadType|null} [payloadType] ProtoErrorRes payloadType
   * @property {string} errorCode ProtoErrorRes errorCode
   * @property {string|null} [description] ProtoErrorRes description
   * @property {Long|null} [maintenanceEndTimestamp] ProtoErrorRes maintenanceEndTimestamp
   */

  /**
   * Constructs a new ProtoErrorRes.
   * @exports ProtoErrorRes
   * @classdesc Represents a ProtoErrorRes.
   * @implements IProtoErrorRes
   * @constructor
   * @param {IProtoErrorRes=} [properties] Properties to set
   */
  function ProtoErrorRes(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoErrorRes payloadType.
   * @member {ProtoPayloadType} payloadType
   * @memberof ProtoErrorRes
   * @instance
   */
  ProtoErrorRes.prototype.payloadType = 50;

  /**
   * ProtoErrorRes errorCode.
   * @member {string} errorCode
   * @memberof ProtoErrorRes
   * @instance
   */
  ProtoErrorRes.prototype.errorCode = "";

  /**
   * ProtoErrorRes description.
   * @member {string} description
   * @memberof ProtoErrorRes
   * @instance
   */
  ProtoErrorRes.prototype.description = "";

  /**
   * ProtoErrorRes maintenanceEndTimestamp.
   * @member {Long} maintenanceEndTimestamp
   * @memberof ProtoErrorRes
   * @instance
   */
  ProtoErrorRes.prototype.maintenanceEndTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * Creates a new ProtoErrorRes instance using the specified properties.
   * @function create
   * @memberof ProtoErrorRes
   * @static
   * @param {IProtoErrorRes=} [properties] Properties to set
   * @returns {ProtoErrorRes} ProtoErrorRes instance
   */
  ProtoErrorRes.create = function create(properties) {
    return new ProtoErrorRes(properties);
  };

  /**
   * Encodes the specified ProtoErrorRes message. Does not implicitly {@link ProtoErrorRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoErrorRes
   * @static
   * @param {IProtoErrorRes} message ProtoErrorRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoErrorRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.errorCode);
    if (message.description != null && message.hasOwnProperty("description"))
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.description);
    if (
      message.maintenanceEndTimestamp != null &&
      message.hasOwnProperty("maintenanceEndTimestamp")
    )
      writer
        .uint32(/* id 4, wireType 0 =*/ 32)
        .uint64(message.maintenanceEndTimestamp);
    return writer;
  };

  /**
   * Decodes a ProtoErrorRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoErrorRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoErrorRes} ProtoErrorRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoErrorRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoErrorRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.errorCode = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.maintenanceEndTimestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("errorCode"))
      throw $util.ProtocolError("missing required 'errorCode'", {
        instance: message
      });
    return message;
  };

  return ProtoErrorRes;
})();

$root.ProtoHeartbeatEvent = (function() {
  /**
   * Properties of a ProtoHeartbeatEvent.
   * @exports IProtoHeartbeatEvent
   * @interface IProtoHeartbeatEvent
   * @property {ProtoPayloadType|null} [payloadType] ProtoHeartbeatEvent payloadType
   */

  /**
   * Constructs a new ProtoHeartbeatEvent.
   * @exports ProtoHeartbeatEvent
   * @classdesc Event that is sent from Open API proxy and can be used as criteria that connection is healthy when no other messages are sent by cTrader platform. Open API client can send this message when he needs to keep the connection open for a period without other messages longer than 30 seconds
   * @implements IProtoHeartbeatEvent
   * @constructor
   * @param {IProtoHeartbeatEvent=} [properties] Properties to set
   */
  function ProtoHeartbeatEvent(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoHeartbeatEvent payloadType.
   * @member {ProtoPayloadType} payloadType
   * @memberof ProtoHeartbeatEvent
   * @instance
   */
  ProtoHeartbeatEvent.prototype.payloadType = 51;

  /**
   * Creates a new ProtoHeartbeatEvent instance using the specified properties.
   * @function create
   * @memberof ProtoHeartbeatEvent
   * @static
   * @param {IProtoHeartbeatEvent=} [properties] Properties to set
   * @returns {ProtoHeartbeatEvent} ProtoHeartbeatEvent instance
   */
  ProtoHeartbeatEvent.create = function create(properties) {
    return new ProtoHeartbeatEvent(properties);
  };

  /**
   * Encodes the specified ProtoHeartbeatEvent message. Does not implicitly {@link ProtoHeartbeatEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoHeartbeatEvent
   * @static
   * @param {IProtoHeartbeatEvent} message ProtoHeartbeatEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoHeartbeatEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    return writer;
  };

  /**
   * Decodes a ProtoHeartbeatEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoHeartbeatEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoHeartbeatEvent} ProtoHeartbeatEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoHeartbeatEvent.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoHeartbeatEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  return ProtoHeartbeatEvent;
})();

/**
 * ProtoPayloadType enum.
 * @exports ProtoPayloadType
 * @enum {string}
 * @property {number} PROTO_MESSAGE=5 PROTO_MESSAGE value
 * @property {number} ERROR_RES=50 ERROR_RES value
 * @property {number} HEARTBEAT_EVENT=51 HEARTBEAT_EVENT value
 */
$root.ProtoPayloadType = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[5] = "PROTO_MESSAGE")] = 5;
  values[(valuesById[50] = "ERROR_RES")] = 50;
  values[(valuesById[51] = "HEARTBEAT_EVENT")] = 51;
  return values;
})();

/**
 * ProtoErrorCode enum.
 * @exports ProtoErrorCode
 * @enum {string}
 * @property {number} UNKNOWN_ERROR=1 UNKNOWN_ERROR value
 * @property {number} UNSUPPORTED_MESSAGE=2 UNSUPPORTED_MESSAGE value
 * @property {number} INVALID_REQUEST=3 INVALID_REQUEST value
 * @property {number} WRONG_PASSWORD=4 WRONG_PASSWORD value
 * @property {number} TIMEOUT_ERROR=5 TIMEOUT_ERROR value
 * @property {number} ENTITY_NOT_FOUND=6 ENTITY_NOT_FOUND value
 * @property {number} CANT_ROUTE_REQUEST=7 CANT_ROUTE_REQUEST value
 * @property {number} FRAME_TOO_LONG=8 FRAME_TOO_LONG value
 * @property {number} MARKET_CLOSED=9 MARKET_CLOSED value
 * @property {number} CONCURRENT_MODIFICATION=10 CONCURRENT_MODIFICATION value
 * @property {number} BLOCKED_PAYLOAD_TYPE=11 BLOCKED_PAYLOAD_TYPE value
 */
$root.ProtoErrorCode = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "UNKNOWN_ERROR")] = 1;
  values[(valuesById[2] = "UNSUPPORTED_MESSAGE")] = 2;
  values[(valuesById[3] = "INVALID_REQUEST")] = 3;
  values[(valuesById[4] = "WRONG_PASSWORD")] = 4;
  values[(valuesById[5] = "TIMEOUT_ERROR")] = 5;
  values[(valuesById[6] = "ENTITY_NOT_FOUND")] = 6;
  values[(valuesById[7] = "CANT_ROUTE_REQUEST")] = 7;
  values[(valuesById[8] = "FRAME_TOO_LONG")] = 8;
  values[(valuesById[9] = "MARKET_CLOSED")] = 9;
  values[(valuesById[10] = "CONCURRENT_MODIFICATION")] = 10;
  values[(valuesById[11] = "BLOCKED_PAYLOAD_TYPE")] = 11;
  return values;
})();

$root.ProtoOAApplicationAuthReq = (function() {
  /**
   * Properties of a ProtoOAApplicationAuthReq.
   * @exports IProtoOAApplicationAuthReq
   * @interface IProtoOAApplicationAuthReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAApplicationAuthReq payloadType
   * @property {string} clientId ProtoOAApplicationAuthReq clientId
   * @property {string} clientSecret ProtoOAApplicationAuthReq clientSecret
   */

  /**
   * Constructs a new ProtoOAApplicationAuthReq.
   * @exports ProtoOAApplicationAuthReq
   * @classdesc Request for the authorizing an application to work with the cTrader platform Proxies.
   * @implements IProtoOAApplicationAuthReq
   * @constructor
   * @param {IProtoOAApplicationAuthReq=} [properties] Properties to set
   */
  function ProtoOAApplicationAuthReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAApplicationAuthReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAApplicationAuthReq
   * @instance
   */
  ProtoOAApplicationAuthReq.prototype.payloadType = 2100;

  /**
   * ProtoOAApplicationAuthReq clientId.
   * @member {string} clientId
   * @memberof ProtoOAApplicationAuthReq
   * @instance
   */
  ProtoOAApplicationAuthReq.prototype.clientId = "";

  /**
   * ProtoOAApplicationAuthReq clientSecret.
   * @member {string} clientSecret
   * @memberof ProtoOAApplicationAuthReq
   * @instance
   */
  ProtoOAApplicationAuthReq.prototype.clientSecret = "";

  /**
   * Creates a new ProtoOAApplicationAuthReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAApplicationAuthReq
   * @static
   * @param {IProtoOAApplicationAuthReq=} [properties] Properties to set
   * @returns {ProtoOAApplicationAuthReq} ProtoOAApplicationAuthReq instance
   */
  ProtoOAApplicationAuthReq.create = function create(properties) {
    return new ProtoOAApplicationAuthReq(properties);
  };

  /**
   * Encodes the specified ProtoOAApplicationAuthReq message. Does not implicitly {@link ProtoOAApplicationAuthReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAApplicationAuthReq
   * @static
   * @param {IProtoOAApplicationAuthReq} message ProtoOAApplicationAuthReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAApplicationAuthReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.clientId);
    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.clientSecret);
    return writer;
  };

  /**
   * Decodes a ProtoOAApplicationAuthReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAApplicationAuthReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAApplicationAuthReq} ProtoOAApplicationAuthReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAApplicationAuthReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAApplicationAuthReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.clientSecret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("clientId"))
      throw $util.ProtocolError("missing required 'clientId'", {
        instance: message
      });
    if (!message.hasOwnProperty("clientSecret"))
      throw $util.ProtocolError("missing required 'clientSecret'", {
        instance: message
      });
    return message;
  };

  return ProtoOAApplicationAuthReq;
})();

$root.ProtoOAApplicationAuthRes = (function() {
  /**
   * Properties of a ProtoOAApplicationAuthRes.
   * @exports IProtoOAApplicationAuthRes
   * @interface IProtoOAApplicationAuthRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAApplicationAuthRes payloadType
   */

  /**
   * Constructs a new ProtoOAApplicationAuthRes.
   * @exports ProtoOAApplicationAuthRes
   * @classdesc Response to the ProtoOAApplicationAuthReq request.
   * @implements IProtoOAApplicationAuthRes
   * @constructor
   * @param {IProtoOAApplicationAuthRes=} [properties] Properties to set
   */
  function ProtoOAApplicationAuthRes(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAApplicationAuthRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAApplicationAuthRes
   * @instance
   */
  ProtoOAApplicationAuthRes.prototype.payloadType = 2101;

  /**
   * Creates a new ProtoOAApplicationAuthRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAApplicationAuthRes
   * @static
   * @param {IProtoOAApplicationAuthRes=} [properties] Properties to set
   * @returns {ProtoOAApplicationAuthRes} ProtoOAApplicationAuthRes instance
   */
  ProtoOAApplicationAuthRes.create = function create(properties) {
    return new ProtoOAApplicationAuthRes(properties);
  };

  /**
   * Encodes the specified ProtoOAApplicationAuthRes message. Does not implicitly {@link ProtoOAApplicationAuthRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAApplicationAuthRes
   * @static
   * @param {IProtoOAApplicationAuthRes} message ProtoOAApplicationAuthRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAApplicationAuthRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    return writer;
  };

  /**
   * Decodes a ProtoOAApplicationAuthRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAApplicationAuthRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAApplicationAuthRes} ProtoOAApplicationAuthRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAApplicationAuthRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAApplicationAuthRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  return ProtoOAApplicationAuthRes;
})();

$root.ProtoOAAccountAuthReq = (function() {
  /**
   * Properties of a ProtoOAAccountAuthReq.
   * @exports IProtoOAAccountAuthReq
   * @interface IProtoOAAccountAuthReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAccountAuthReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAAccountAuthReq ctidTraderAccountId
   * @property {string} accessToken ProtoOAAccountAuthReq accessToken
   */

  /**
   * Constructs a new ProtoOAAccountAuthReq.
   * @exports ProtoOAAccountAuthReq
   * @classdesc Request for the authorizing trading account session. Requires established authorized connection with the client application using ProtoOAApplicationAuthReq.
   * @implements IProtoOAAccountAuthReq
   * @constructor
   * @param {IProtoOAAccountAuthReq=} [properties] Properties to set
   */
  function ProtoOAAccountAuthReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAccountAuthReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAccountAuthReq
   * @instance
   */
  ProtoOAAccountAuthReq.prototype.payloadType = 2102;

  /**
   * ProtoOAAccountAuthReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAAccountAuthReq
   * @instance
   */
  ProtoOAAccountAuthReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAccountAuthReq accessToken.
   * @member {string} accessToken
   * @memberof ProtoOAAccountAuthReq
   * @instance
   */
  ProtoOAAccountAuthReq.prototype.accessToken = "";

  /**
   * Creates a new ProtoOAAccountAuthReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAAccountAuthReq
   * @static
   * @param {IProtoOAAccountAuthReq=} [properties] Properties to set
   * @returns {ProtoOAAccountAuthReq} ProtoOAAccountAuthReq instance
   */
  ProtoOAAccountAuthReq.create = function create(properties) {
    return new ProtoOAAccountAuthReq(properties);
  };

  /**
   * Encodes the specified ProtoOAAccountAuthReq message. Does not implicitly {@link ProtoOAAccountAuthReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAccountAuthReq
   * @static
   * @param {IProtoOAAccountAuthReq} message ProtoOAAccountAuthReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAccountAuthReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.accessToken);
    return writer;
  };

  /**
   * Decodes a ProtoOAAccountAuthReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAccountAuthReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAccountAuthReq} ProtoOAAccountAuthReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAccountAuthReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAccountAuthReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("accessToken"))
      throw $util.ProtocolError("missing required 'accessToken'", {
        instance: message
      });
    return message;
  };

  return ProtoOAAccountAuthReq;
})();

$root.ProtoOAAccountAuthRes = (function() {
  /**
   * Properties of a ProtoOAAccountAuthRes.
   * @exports IProtoOAAccountAuthRes
   * @interface IProtoOAAccountAuthRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAccountAuthRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOAAccountAuthRes ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAAccountAuthRes.
   * @exports ProtoOAAccountAuthRes
   * @classdesc Response to the ProtoOAApplicationAuthRes request.
   * @implements IProtoOAAccountAuthRes
   * @constructor
   * @param {IProtoOAAccountAuthRes=} [properties] Properties to set
   */
  function ProtoOAAccountAuthRes(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAccountAuthRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAccountAuthRes
   * @instance
   */
  ProtoOAAccountAuthRes.prototype.payloadType = 2103;

  /**
   * ProtoOAAccountAuthRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAAccountAuthRes
   * @instance
   */
  ProtoOAAccountAuthRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAAccountAuthRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAAccountAuthRes
   * @static
   * @param {IProtoOAAccountAuthRes=} [properties] Properties to set
   * @returns {ProtoOAAccountAuthRes} ProtoOAAccountAuthRes instance
   */
  ProtoOAAccountAuthRes.create = function create(properties) {
    return new ProtoOAAccountAuthRes(properties);
  };

  /**
   * Encodes the specified ProtoOAAccountAuthRes message. Does not implicitly {@link ProtoOAAccountAuthRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAccountAuthRes
   * @static
   * @param {IProtoOAAccountAuthRes} message ProtoOAAccountAuthRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAccountAuthRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAAccountAuthRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAccountAuthRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAccountAuthRes} ProtoOAAccountAuthRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAccountAuthRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAccountAuthRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAAccountAuthRes;
})();

$root.ProtoOAErrorRes = (function() {
  /**
   * Properties of a ProtoOAErrorRes.
   * @exports IProtoOAErrorRes
   * @interface IProtoOAErrorRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAErrorRes payloadType
   * @property {Long|null} [ctidTraderAccountId] ProtoOAErrorRes ctidTraderAccountId
   * @property {string} errorCode ProtoOAErrorRes errorCode
   * @property {string|null} [description] ProtoOAErrorRes description
   */

  /**
   * Constructs a new ProtoOAErrorRes.
   * @exports ProtoOAErrorRes
   * @classdesc Generic response when an ERROR occurred.
   * @implements IProtoOAErrorRes
   * @constructor
   * @param {IProtoOAErrorRes=} [properties] Properties to set
   */
  function ProtoOAErrorRes(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAErrorRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAErrorRes
   * @instance
   */
  ProtoOAErrorRes.prototype.payloadType = 2142;

  /**
   * ProtoOAErrorRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAErrorRes
   * @instance
   */
  ProtoOAErrorRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAErrorRes errorCode.
   * @member {string} errorCode
   * @memberof ProtoOAErrorRes
   * @instance
   */
  ProtoOAErrorRes.prototype.errorCode = "";

  /**
   * ProtoOAErrorRes description.
   * @member {string} description
   * @memberof ProtoOAErrorRes
   * @instance
   */
  ProtoOAErrorRes.prototype.description = "";

  /**
   * Creates a new ProtoOAErrorRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAErrorRes
   * @static
   * @param {IProtoOAErrorRes=} [properties] Properties to set
   * @returns {ProtoOAErrorRes} ProtoOAErrorRes instance
   */
  ProtoOAErrorRes.create = function create(properties) {
    return new ProtoOAErrorRes(properties);
  };

  /**
   * Encodes the specified ProtoOAErrorRes message. Does not implicitly {@link ProtoOAErrorRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAErrorRes
   * @static
   * @param {IProtoOAErrorRes} message ProtoOAErrorRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAErrorRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    if (
      message.ctidTraderAccountId != null &&
      message.hasOwnProperty("ctidTraderAccountId")
    )
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.errorCode);
    if (message.description != null && message.hasOwnProperty("description"))
      writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.description);
    return writer;
  };

  /**
   * Decodes a ProtoOAErrorRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAErrorRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAErrorRes} ProtoOAErrorRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAErrorRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAErrorRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.errorCode = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("errorCode"))
      throw $util.ProtocolError("missing required 'errorCode'", {
        instance: message
      });
    return message;
  };

  return ProtoOAErrorRes;
})();

$root.ProtoOAClientDisconnectEvent = (function() {
  /**
   * Properties of a ProtoOAClientDisconnectEvent.
   * @exports IProtoOAClientDisconnectEvent
   * @interface IProtoOAClientDisconnectEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAClientDisconnectEvent payloadType
   * @property {string|null} [reason] ProtoOAClientDisconnectEvent reason
   */

  /**
   * Constructs a new ProtoOAClientDisconnectEvent.
   * @exports ProtoOAClientDisconnectEvent
   * @classdesc The event that is sent when the connection with the client application is cancelled by the server. All the sessions for the traders' accounts will be terminated.
   * @implements IProtoOAClientDisconnectEvent
   * @constructor
   * @param {IProtoOAClientDisconnectEvent=} [properties] Properties to set
   */
  function ProtoOAClientDisconnectEvent(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAClientDisconnectEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAClientDisconnectEvent
   * @instance
   */
  ProtoOAClientDisconnectEvent.prototype.payloadType = 2148;

  /**
   * ProtoOAClientDisconnectEvent reason.
   * @member {string} reason
   * @memberof ProtoOAClientDisconnectEvent
   * @instance
   */
  ProtoOAClientDisconnectEvent.prototype.reason = "";

  /**
   * Creates a new ProtoOAClientDisconnectEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOAClientDisconnectEvent
   * @static
   * @param {IProtoOAClientDisconnectEvent=} [properties] Properties to set
   * @returns {ProtoOAClientDisconnectEvent} ProtoOAClientDisconnectEvent instance
   */
  ProtoOAClientDisconnectEvent.create = function create(properties) {
    return new ProtoOAClientDisconnectEvent(properties);
  };

  /**
   * Encodes the specified ProtoOAClientDisconnectEvent message. Does not implicitly {@link ProtoOAClientDisconnectEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAClientDisconnectEvent
   * @static
   * @param {IProtoOAClientDisconnectEvent} message ProtoOAClientDisconnectEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAClientDisconnectEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    if (message.reason != null && message.hasOwnProperty("reason"))
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.reason);
    return writer;
  };

  /**
   * Decodes a ProtoOAClientDisconnectEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAClientDisconnectEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAClientDisconnectEvent} ProtoOAClientDisconnectEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAClientDisconnectEvent.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAClientDisconnectEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  return ProtoOAClientDisconnectEvent;
})();

$root.ProtoOAAccountsTokenInvalidatedEvent = (function() {
  /**
   * Properties of a ProtoOAAccountsTokenInvalidatedEvent.
   * @exports IProtoOAAccountsTokenInvalidatedEvent
   * @interface IProtoOAAccountsTokenInvalidatedEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAccountsTokenInvalidatedEvent payloadType
   * @property {Array.<Long>|null} [ctidTraderAccountIds] ProtoOAAccountsTokenInvalidatedEvent ctidTraderAccountIds
   * @property {string|null} [reason] ProtoOAAccountsTokenInvalidatedEvent reason
   */

  /**
   * Constructs a new ProtoOAAccountsTokenInvalidatedEvent.
   * @exports ProtoOAAccountsTokenInvalidatedEvent
   * @classdesc Event that is sent when a session to a specific trader's account is terminated by the server but the existing connections with the other trader's accounts are maintained.
   * @implements IProtoOAAccountsTokenInvalidatedEvent
   * @constructor
   * @param {IProtoOAAccountsTokenInvalidatedEvent=} [properties] Properties to set
   */
  function ProtoOAAccountsTokenInvalidatedEvent(properties) {
    this.ctidTraderAccountIds = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAccountsTokenInvalidatedEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAccountsTokenInvalidatedEvent
   * @instance
   */
  ProtoOAAccountsTokenInvalidatedEvent.prototype.payloadType = 2147;

  /**
   * ProtoOAAccountsTokenInvalidatedEvent ctidTraderAccountIds.
   * @member {Array.<Long>} ctidTraderAccountIds
   * @memberof ProtoOAAccountsTokenInvalidatedEvent
   * @instance
   */
  ProtoOAAccountsTokenInvalidatedEvent.prototype.ctidTraderAccountIds =
    $util.emptyArray;

  /**
   * ProtoOAAccountsTokenInvalidatedEvent reason.
   * @member {string} reason
   * @memberof ProtoOAAccountsTokenInvalidatedEvent
   * @instance
   */
  ProtoOAAccountsTokenInvalidatedEvent.prototype.reason = "";

  /**
   * Creates a new ProtoOAAccountsTokenInvalidatedEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOAAccountsTokenInvalidatedEvent
   * @static
   * @param {IProtoOAAccountsTokenInvalidatedEvent=} [properties] Properties to set
   * @returns {ProtoOAAccountsTokenInvalidatedEvent} ProtoOAAccountsTokenInvalidatedEvent instance
   */
  ProtoOAAccountsTokenInvalidatedEvent.create = function create(properties) {
    return new ProtoOAAccountsTokenInvalidatedEvent(properties);
  };

  /**
   * Encodes the specified ProtoOAAccountsTokenInvalidatedEvent message. Does not implicitly {@link ProtoOAAccountsTokenInvalidatedEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAccountsTokenInvalidatedEvent
   * @static
   * @param {IProtoOAAccountsTokenInvalidatedEvent} message ProtoOAAccountsTokenInvalidatedEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAccountsTokenInvalidatedEvent.encode = function encode(
    message,
    writer
  ) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    if (
      message.ctidTraderAccountIds != null &&
      message.ctidTraderAccountIds.length
    )
      for (var i = 0; i < message.ctidTraderAccountIds.length; ++i)
        writer
          .uint32(/* id 2, wireType 0 =*/ 16)
          .int64(message.ctidTraderAccountIds[i]);
    if (message.reason != null && message.hasOwnProperty("reason"))
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.reason);
    return writer;
  };

  /**
   * Decodes a ProtoOAAccountsTokenInvalidatedEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAccountsTokenInvalidatedEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAccountsTokenInvalidatedEvent} ProtoOAAccountsTokenInvalidatedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAccountsTokenInvalidatedEvent.decode = function decode(
    reader,
    length
  ) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAccountsTokenInvalidatedEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          if (
            !(
              message.ctidTraderAccountIds &&
              message.ctidTraderAccountIds.length
            )
          )
            message.ctidTraderAccountIds = [];
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2)
              message.ctidTraderAccountIds.push(reader.int64());
          } else message.ctidTraderAccountIds.push(reader.int64());
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  return ProtoOAAccountsTokenInvalidatedEvent;
})();

$root.ProtoOAVersionReq = (function() {
  /**
   * Properties of a ProtoOAVersionReq.
   * @exports IProtoOAVersionReq
   * @interface IProtoOAVersionReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAVersionReq payloadType
   */

  /**
   * Constructs a new ProtoOAVersionReq.
   * @exports ProtoOAVersionReq
   * @classdesc Request for getting the proxy version. Can be used to check the current version of the Open API scheme.
   * @implements IProtoOAVersionReq
   * @constructor
   * @param {IProtoOAVersionReq=} [properties] Properties to set
   */
  function ProtoOAVersionReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAVersionReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAVersionReq
   * @instance
   */
  ProtoOAVersionReq.prototype.payloadType = 2104;

  /**
   * Creates a new ProtoOAVersionReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAVersionReq
   * @static
   * @param {IProtoOAVersionReq=} [properties] Properties to set
   * @returns {ProtoOAVersionReq} ProtoOAVersionReq instance
   */
  ProtoOAVersionReq.create = function create(properties) {
    return new ProtoOAVersionReq(properties);
  };

  /**
   * Encodes the specified ProtoOAVersionReq message. Does not implicitly {@link ProtoOAVersionReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAVersionReq
   * @static
   * @param {IProtoOAVersionReq} message ProtoOAVersionReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAVersionReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    return writer;
  };

  /**
   * Decodes a ProtoOAVersionReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAVersionReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAVersionReq} ProtoOAVersionReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAVersionReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAVersionReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  return ProtoOAVersionReq;
})();

$root.ProtoOAVersionRes = (function() {
  /**
   * Properties of a ProtoOAVersionRes.
   * @exports IProtoOAVersionRes
   * @interface IProtoOAVersionRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAVersionRes payloadType
   * @property {string} version ProtoOAVersionRes version
   */

  /**
   * Constructs a new ProtoOAVersionRes.
   * @exports ProtoOAVersionRes
   * @classdesc Response to the ProtoOAVersionReq request.
   * @implements IProtoOAVersionRes
   * @constructor
   * @param {IProtoOAVersionRes=} [properties] Properties to set
   */
  function ProtoOAVersionRes(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAVersionRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAVersionRes
   * @instance
   */
  ProtoOAVersionRes.prototype.payloadType = 2105;

  /**
   * ProtoOAVersionRes version.
   * @member {string} version
   * @memberof ProtoOAVersionRes
   * @instance
   */
  ProtoOAVersionRes.prototype.version = "";

  /**
   * Creates a new ProtoOAVersionRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAVersionRes
   * @static
   * @param {IProtoOAVersionRes=} [properties] Properties to set
   * @returns {ProtoOAVersionRes} ProtoOAVersionRes instance
   */
  ProtoOAVersionRes.create = function create(properties) {
    return new ProtoOAVersionRes(properties);
  };

  /**
   * Encodes the specified ProtoOAVersionRes message. Does not implicitly {@link ProtoOAVersionRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAVersionRes
   * @static
   * @param {IProtoOAVersionRes} message ProtoOAVersionRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAVersionRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.version);
    return writer;
  };

  /**
   * Decodes a ProtoOAVersionRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAVersionRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAVersionRes} ProtoOAVersionRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAVersionRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAVersionRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("version"))
      throw $util.ProtocolError("missing required 'version'", {
        instance: message
      });
    return message;
  };

  return ProtoOAVersionRes;
})();

$root.ProtoOANewOrderReq = (function() {
  /**
   * Properties of a ProtoOANewOrderReq.
   * @exports IProtoOANewOrderReq
   * @interface IProtoOANewOrderReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOANewOrderReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOANewOrderReq ctidTraderAccountId
   * @property {Long} symbolId ProtoOANewOrderReq symbolId
   * @property {ProtoOAOrderType} orderType ProtoOANewOrderReq orderType
   * @property {ProtoOATradeSide} tradeSide ProtoOANewOrderReq tradeSide
   * @property {Long} volume ProtoOANewOrderReq volume
   * @property {number|null} [limitPrice] ProtoOANewOrderReq limitPrice
   * @property {number|null} [stopPrice] ProtoOANewOrderReq stopPrice
   * @property {ProtoOATimeInForce|null} [timeInForce] ProtoOANewOrderReq timeInForce
   * @property {Long|null} [expirationTimestamp] ProtoOANewOrderReq expirationTimestamp
   * @property {number|null} [stopLoss] ProtoOANewOrderReq stopLoss
   * @property {number|null} [takeProfit] ProtoOANewOrderReq takeProfit
   * @property {string|null} [comment] ProtoOANewOrderReq comment
   * @property {number|null} [baseSlippagePrice] ProtoOANewOrderReq baseSlippagePrice
   * @property {number|null} [slippageInPoints] ProtoOANewOrderReq slippageInPoints
   * @property {string|null} [label] ProtoOANewOrderReq label
   * @property {Long|null} [positionId] ProtoOANewOrderReq positionId
   * @property {string|null} [clientOrderId] ProtoOANewOrderReq clientOrderId
   * @property {Long|null} [relativeStopLoss] ProtoOANewOrderReq relativeStopLoss
   * @property {Long|null} [relativeTakeProfit] ProtoOANewOrderReq relativeTakeProfit
   * @property {boolean|null} [guaranteedStopLoss] ProtoOANewOrderReq guaranteedStopLoss
   * @property {boolean|null} [trailingStopLoss] ProtoOANewOrderReq trailingStopLoss
   * @property {ProtoOAOrderTriggerMethod|null} [stopTriggerMethod] ProtoOANewOrderReq stopTriggerMethod
   */

  /**
   * Constructs a new ProtoOANewOrderReq.
   * @exports ProtoOANewOrderReq
   * @classdesc Request for sending a new trading order. Allowed only if the accessToken has the "trade" permissions for the trading account.
   * @implements IProtoOANewOrderReq
   * @constructor
   * @param {IProtoOANewOrderReq=} [properties] Properties to set
   */
  function ProtoOANewOrderReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOANewOrderReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.payloadType = 2106;

  /**
   * ProtoOANewOrderReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq orderType.
   * @member {ProtoOAOrderType} orderType
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.orderType = 1;

  /**
   * ProtoOANewOrderReq tradeSide.
   * @member {ProtoOATradeSide} tradeSide
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.tradeSide = 1;

  /**
   * ProtoOANewOrderReq volume.
   * @member {Long} volume
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq limitPrice.
   * @member {number} limitPrice
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.limitPrice = 0;

  /**
   * ProtoOANewOrderReq stopPrice.
   * @member {number} stopPrice
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.stopPrice = 0;

  /**
   * ProtoOANewOrderReq timeInForce.
   * @member {ProtoOATimeInForce} timeInForce
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.timeInForce = 2;

  /**
   * ProtoOANewOrderReq expirationTimestamp.
   * @member {Long} expirationTimestamp
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.expirationTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq stopLoss.
   * @member {number} stopLoss
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.stopLoss = 0;

  /**
   * ProtoOANewOrderReq takeProfit.
   * @member {number} takeProfit
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.takeProfit = 0;

  /**
   * ProtoOANewOrderReq comment.
   * @member {string} comment
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.comment = "";

  /**
   * ProtoOANewOrderReq baseSlippagePrice.
   * @member {number} baseSlippagePrice
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.baseSlippagePrice = 0;

  /**
   * ProtoOANewOrderReq slippageInPoints.
   * @member {number} slippageInPoints
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.slippageInPoints = 0;

  /**
   * ProtoOANewOrderReq label.
   * @member {string} label
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.label = "";

  /**
   * ProtoOANewOrderReq positionId.
   * @member {Long} positionId
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq clientOrderId.
   * @member {string} clientOrderId
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.clientOrderId = "";

  /**
   * ProtoOANewOrderReq relativeStopLoss.
   * @member {Long} relativeStopLoss
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.relativeStopLoss = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq relativeTakeProfit.
   * @member {Long} relativeTakeProfit
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.relativeTakeProfit = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq guaranteedStopLoss.
   * @member {boolean} guaranteedStopLoss
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.guaranteedStopLoss = false;

  /**
   * ProtoOANewOrderReq trailingStopLoss.
   * @member {boolean} trailingStopLoss
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.trailingStopLoss = false;

  /**
   * ProtoOANewOrderReq stopTriggerMethod.
   * @member {ProtoOAOrderTriggerMethod} stopTriggerMethod
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.stopTriggerMethod = 1;

  /**
   * Creates a new ProtoOANewOrderReq instance using the specified properties.
   * @function create
   * @memberof ProtoOANewOrderReq
   * @static
   * @param {IProtoOANewOrderReq=} [properties] Properties to set
   * @returns {ProtoOANewOrderReq} ProtoOANewOrderReq instance
   */
  ProtoOANewOrderReq.create = function create(properties) {
    return new ProtoOANewOrderReq(properties);
  };

  /**
   * Encodes the specified ProtoOANewOrderReq message. Does not implicitly {@link ProtoOANewOrderReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOANewOrderReq
   * @static
   * @param {IProtoOANewOrderReq} message ProtoOANewOrderReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOANewOrderReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.orderType);
    writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.tradeSide);
    writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.volume);
    if (message.limitPrice != null && message.hasOwnProperty("limitPrice"))
      writer.uint32(/* id 7, wireType 1 =*/ 57).double(message.limitPrice);
    if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
      writer.uint32(/* id 8, wireType 1 =*/ 65).double(message.stopPrice);
    if (message.timeInForce != null && message.hasOwnProperty("timeInForce"))
      writer.uint32(/* id 9, wireType 0 =*/ 72).int32(message.timeInForce);
    if (
      message.expirationTimestamp != null &&
      message.hasOwnProperty("expirationTimestamp")
    )
      writer
        .uint32(/* id 10, wireType 0 =*/ 80)
        .int64(message.expirationTimestamp);
    if (message.stopLoss != null && message.hasOwnProperty("stopLoss"))
      writer.uint32(/* id 11, wireType 1 =*/ 89).double(message.stopLoss);
    if (message.takeProfit != null && message.hasOwnProperty("takeProfit"))
      writer.uint32(/* id 12, wireType 1 =*/ 97).double(message.takeProfit);
    if (message.comment != null && message.hasOwnProperty("comment"))
      writer.uint32(/* id 13, wireType 2 =*/ 106).string(message.comment);
    if (
      message.baseSlippagePrice != null &&
      message.hasOwnProperty("baseSlippagePrice")
    )
      writer
        .uint32(/* id 14, wireType 1 =*/ 113)
        .double(message.baseSlippagePrice);
    if (
      message.slippageInPoints != null &&
      message.hasOwnProperty("slippageInPoints")
    )
      writer
        .uint32(/* id 15, wireType 0 =*/ 120)
        .int32(message.slippageInPoints);
    if (message.label != null && message.hasOwnProperty("label"))
      writer.uint32(/* id 16, wireType 2 =*/ 130).string(message.label);
    if (message.positionId != null && message.hasOwnProperty("positionId"))
      writer.uint32(/* id 17, wireType 0 =*/ 136).int64(message.positionId);
    if (
      message.clientOrderId != null &&
      message.hasOwnProperty("clientOrderId")
    )
      writer.uint32(/* id 18, wireType 2 =*/ 146).string(message.clientOrderId);
    if (
      message.relativeStopLoss != null &&
      message.hasOwnProperty("relativeStopLoss")
    )
      writer
        .uint32(/* id 19, wireType 0 =*/ 152)
        .int64(message.relativeStopLoss);
    if (
      message.relativeTakeProfit != null &&
      message.hasOwnProperty("relativeTakeProfit")
    )
      writer
        .uint32(/* id 20, wireType 0 =*/ 160)
        .int64(message.relativeTakeProfit);
    if (
      message.guaranteedStopLoss != null &&
      message.hasOwnProperty("guaranteedStopLoss")
    )
      writer
        .uint32(/* id 21, wireType 0 =*/ 168)
        .bool(message.guaranteedStopLoss);
    if (
      message.trailingStopLoss != null &&
      message.hasOwnProperty("trailingStopLoss")
    )
      writer
        .uint32(/* id 22, wireType 0 =*/ 176)
        .bool(message.trailingStopLoss);
    if (
      message.stopTriggerMethod != null &&
      message.hasOwnProperty("stopTriggerMethod")
    )
      writer
        .uint32(/* id 23, wireType 0 =*/ 184)
        .int32(message.stopTriggerMethod);
    return writer;
  };

  /**
   * Decodes a ProtoOANewOrderReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOANewOrderReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOANewOrderReq} ProtoOANewOrderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOANewOrderReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOANewOrderReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.symbolId = reader.int64();
          break;
        case 4:
          message.orderType = reader.int32();
          break;
        case 5:
          message.tradeSide = reader.int32();
          break;
        case 6:
          message.volume = reader.int64();
          break;
        case 7:
          message.limitPrice = reader.double();
          break;
        case 8:
          message.stopPrice = reader.double();
          break;
        case 9:
          message.timeInForce = reader.int32();
          break;
        case 10:
          message.expirationTimestamp = reader.int64();
          break;
        case 11:
          message.stopLoss = reader.double();
          break;
        case 12:
          message.takeProfit = reader.double();
          break;
        case 13:
          message.comment = reader.string();
          break;
        case 14:
          message.baseSlippagePrice = reader.double();
          break;
        case 15:
          message.slippageInPoints = reader.int32();
          break;
        case 16:
          message.label = reader.string();
          break;
        case 17:
          message.positionId = reader.int64();
          break;
        case 18:
          message.clientOrderId = reader.string();
          break;
        case 19:
          message.relativeStopLoss = reader.int64();
          break;
        case 20:
          message.relativeTakeProfit = reader.int64();
          break;
        case 21:
          message.guaranteedStopLoss = reader.bool();
          break;
        case 22:
          message.trailingStopLoss = reader.bool();
          break;
        case 23:
          message.stopTriggerMethod = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message
      });
    if (!message.hasOwnProperty("orderType"))
      throw $util.ProtocolError("missing required 'orderType'", {
        instance: message
      });
    if (!message.hasOwnProperty("tradeSide"))
      throw $util.ProtocolError("missing required 'tradeSide'", {
        instance: message
      });
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message
      });
    return message;
  };

  return ProtoOANewOrderReq;
})();

$root.ProtoOAExecutionEvent = (function() {
  /**
   * Properties of a ProtoOAExecutionEvent.
   * @exports IProtoOAExecutionEvent
   * @interface IProtoOAExecutionEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAExecutionEvent payloadType
   * @property {Long} ctidTraderAccountId ProtoOAExecutionEvent ctidTraderAccountId
   * @property {ProtoOAExecutionType} executionType ProtoOAExecutionEvent executionType
   * @property {IProtoOAPosition|null} [position] ProtoOAExecutionEvent position
   * @property {IProtoOAOrder|null} [order] ProtoOAExecutionEvent order
   * @property {IProtoOADeal|null} [deal] ProtoOAExecutionEvent deal
   * @property {IProtoOABonusDepositWithdraw|null} [bonusDepositWithdraw] ProtoOAExecutionEvent bonusDepositWithdraw
   * @property {IProtoOADepositWithdraw|null} [depositWithdraw] ProtoOAExecutionEvent depositWithdraw
   * @property {string|null} [errorCode] ProtoOAExecutionEvent errorCode
   * @property {boolean|null} [isServerEvent] ProtoOAExecutionEvent isServerEvent
   */

  /**
   * Constructs a new ProtoOAExecutionEvent.
   * @exports ProtoOAExecutionEvent
   * @classdesc The event that is sent following the successful order acceptance or execution by the server. Acts as response to the ProtoOANewOrderReq, ProtoOACancelOrderReq, ProtoOAAmendOrderReq, ProtoOAAmendPositionSLTPReq, ProtoOAClosePositionReq requests. Also, the event is sent when a Deposit/Withdrawal took place.
   * @implements IProtoOAExecutionEvent
   * @constructor
   * @param {IProtoOAExecutionEvent=} [properties] Properties to set
   */
  function ProtoOAExecutionEvent(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAExecutionEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.payloadType = 2126;

  /**
   * ProtoOAExecutionEvent ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAExecutionEvent executionType.
   * @member {ProtoOAExecutionType} executionType
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.executionType = 2;

  /**
   * ProtoOAExecutionEvent position.
   * @member {IProtoOAPosition|null|undefined} position
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.position = null;

  /**
   * ProtoOAExecutionEvent order.
   * @member {IProtoOAOrder|null|undefined} order
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.order = null;

  /**
   * ProtoOAExecutionEvent deal.
   * @member {IProtoOADeal|null|undefined} deal
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.deal = null;

  /**
   * ProtoOAExecutionEvent bonusDepositWithdraw.
   * @member {IProtoOABonusDepositWithdraw|null|undefined} bonusDepositWithdraw
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.bonusDepositWithdraw = null;

  /**
   * ProtoOAExecutionEvent depositWithdraw.
   * @member {IProtoOADepositWithdraw|null|undefined} depositWithdraw
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.depositWithdraw = null;

  /**
   * ProtoOAExecutionEvent errorCode.
   * @member {string} errorCode
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.errorCode = "";

  /**
   * ProtoOAExecutionEvent isServerEvent.
   * @member {boolean} isServerEvent
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.isServerEvent = false;

  /**
   * Creates a new ProtoOAExecutionEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOAExecutionEvent
   * @static
   * @param {IProtoOAExecutionEvent=} [properties] Properties to set
   * @returns {ProtoOAExecutionEvent} ProtoOAExecutionEvent instance
   */
  ProtoOAExecutionEvent.create = function create(properties) {
    return new ProtoOAExecutionEvent(properties);
  };

  /**
   * Encodes the specified ProtoOAExecutionEvent message. Does not implicitly {@link ProtoOAExecutionEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAExecutionEvent
   * @static
   * @param {IProtoOAExecutionEvent} message ProtoOAExecutionEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAExecutionEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.executionType);
    if (message.position != null && message.hasOwnProperty("position"))
      $root.ProtoOAPosition.encode(
        message.position,
        writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
      ).ldelim();
    if (message.order != null && message.hasOwnProperty("order"))
      $root.ProtoOAOrder.encode(
        message.order,
        writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
      ).ldelim();
    if (message.deal != null && message.hasOwnProperty("deal"))
      $root.ProtoOADeal.encode(
        message.deal,
        writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
      ).ldelim();
    if (
      message.bonusDepositWithdraw != null &&
      message.hasOwnProperty("bonusDepositWithdraw")
    )
      $root.ProtoOABonusDepositWithdraw.encode(
        message.bonusDepositWithdraw,
        writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
      ).ldelim();
    if (
      message.depositWithdraw != null &&
      message.hasOwnProperty("depositWithdraw")
    )
      $root.ProtoOADepositWithdraw.encode(
        message.depositWithdraw,
        writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
      ).ldelim();
    if (message.errorCode != null && message.hasOwnProperty("errorCode"))
      writer.uint32(/* id 9, wireType 2 =*/ 74).string(message.errorCode);
    if (
      message.isServerEvent != null &&
      message.hasOwnProperty("isServerEvent")
    )
      writer.uint32(/* id 10, wireType 0 =*/ 80).bool(message.isServerEvent);
    return writer;
  };

  /**
   * Decodes a ProtoOAExecutionEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAExecutionEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAExecutionEvent} ProtoOAExecutionEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAExecutionEvent.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAExecutionEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.executionType = reader.int32();
          break;
        case 4:
          message.position = $root.ProtoOAPosition.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.order = $root.ProtoOAOrder.decode(reader, reader.uint32());
          break;
        case 6:
          message.deal = $root.ProtoOADeal.decode(reader, reader.uint32());
          break;
        case 7:
          message.bonusDepositWithdraw = $root.ProtoOABonusDepositWithdraw.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.depositWithdraw = $root.ProtoOADepositWithdraw.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.errorCode = reader.string();
          break;
        case 10:
          message.isServerEvent = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("executionType"))
      throw $util.ProtocolError("missing required 'executionType'", {
        instance: message
      });
    return message;
  };

  return ProtoOAExecutionEvent;
})();

$root.ProtoOACancelOrderReq = (function() {
  /**
   * Properties of a ProtoOACancelOrderReq.
   * @exports IProtoOACancelOrderReq
   * @interface IProtoOACancelOrderReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOACancelOrderReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOACancelOrderReq ctidTraderAccountId
   * @property {Long} orderId ProtoOACancelOrderReq orderId
   */

  /**
   * Constructs a new ProtoOACancelOrderReq.
   * @exports ProtoOACancelOrderReq
   * @classdesc Request for cancelling existing pending order. Allowed only if the accessToken has "trade" permissions for the trading account.
   * @implements IProtoOACancelOrderReq
   * @constructor
   * @param {IProtoOACancelOrderReq=} [properties] Properties to set
   */
  function ProtoOACancelOrderReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOACancelOrderReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOACancelOrderReq
   * @instance
   */
  ProtoOACancelOrderReq.prototype.payloadType = 2108;

  /**
   * ProtoOACancelOrderReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOACancelOrderReq
   * @instance
   */
  ProtoOACancelOrderReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOACancelOrderReq orderId.
   * @member {Long} orderId
   * @memberof ProtoOACancelOrderReq
   * @instance
   */
  ProtoOACancelOrderReq.prototype.orderId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOACancelOrderReq instance using the specified properties.
   * @function create
   * @memberof ProtoOACancelOrderReq
   * @static
   * @param {IProtoOACancelOrderReq=} [properties] Properties to set
   * @returns {ProtoOACancelOrderReq} ProtoOACancelOrderReq instance
   */
  ProtoOACancelOrderReq.create = function create(properties) {
    return new ProtoOACancelOrderReq(properties);
  };

  /**
   * Encodes the specified ProtoOACancelOrderReq message. Does not implicitly {@link ProtoOACancelOrderReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOACancelOrderReq
   * @static
   * @param {IProtoOACancelOrderReq} message ProtoOACancelOrderReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOACancelOrderReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.orderId);
    return writer;
  };

  /**
   * Decodes a ProtoOACancelOrderReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOACancelOrderReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOACancelOrderReq} ProtoOACancelOrderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOACancelOrderReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOACancelOrderReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.orderId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("orderId"))
      throw $util.ProtocolError("missing required 'orderId'", {
        instance: message
      });
    return message;
  };

  return ProtoOACancelOrderReq;
})();

$root.ProtoOAAmendOrderReq = (function() {
  /**
   * Properties of a ProtoOAAmendOrderReq.
   * @exports IProtoOAAmendOrderReq
   * @interface IProtoOAAmendOrderReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAmendOrderReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAAmendOrderReq ctidTraderAccountId
   * @property {Long} orderId ProtoOAAmendOrderReq orderId
   * @property {Long|null} [volume] ProtoOAAmendOrderReq volume
   * @property {number|null} [limitPrice] ProtoOAAmendOrderReq limitPrice
   * @property {number|null} [stopPrice] ProtoOAAmendOrderReq stopPrice
   * @property {Long|null} [expirationTimestamp] ProtoOAAmendOrderReq expirationTimestamp
   * @property {number|null} [stopLoss] ProtoOAAmendOrderReq stopLoss
   * @property {number|null} [takeProfit] ProtoOAAmendOrderReq takeProfit
   * @property {number|null} [slippageInPoints] ProtoOAAmendOrderReq slippageInPoints
   * @property {Long|null} [relativeStopLoss] ProtoOAAmendOrderReq relativeStopLoss
   * @property {Long|null} [relativeTakeProfit] ProtoOAAmendOrderReq relativeTakeProfit
   * @property {boolean|null} [guaranteedStopLoss] ProtoOAAmendOrderReq guaranteedStopLoss
   * @property {boolean|null} [trailingStopLoss] ProtoOAAmendOrderReq trailingStopLoss
   * @property {ProtoOAOrderTriggerMethod|null} [stopTriggerMethod] ProtoOAAmendOrderReq stopTriggerMethod
   */

  /**
   * Constructs a new ProtoOAAmendOrderReq.
   * @exports ProtoOAAmendOrderReq
   * @classdesc Request for amending the existing pending order. Allowed only if the Access Token has "trade" permissions for the trading account.
   * @implements IProtoOAAmendOrderReq
   * @constructor
   * @param {IProtoOAAmendOrderReq=} [properties] Properties to set
   */
  function ProtoOAAmendOrderReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAmendOrderReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.payloadType = 2109;

  /**
   * ProtoOAAmendOrderReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendOrderReq orderId.
   * @member {Long} orderId
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.orderId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendOrderReq volume.
   * @member {Long} volume
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendOrderReq limitPrice.
   * @member {number} limitPrice
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.limitPrice = 0;

  /**
   * ProtoOAAmendOrderReq stopPrice.
   * @member {number} stopPrice
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.stopPrice = 0;

  /**
   * ProtoOAAmendOrderReq expirationTimestamp.
   * @member {Long} expirationTimestamp
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.expirationTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendOrderReq stopLoss.
   * @member {number} stopLoss
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.stopLoss = 0;

  /**
   * ProtoOAAmendOrderReq takeProfit.
   * @member {number} takeProfit
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.takeProfit = 0;

  /**
   * ProtoOAAmendOrderReq slippageInPoints.
   * @member {number} slippageInPoints
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.slippageInPoints = 0;

  /**
   * ProtoOAAmendOrderReq relativeStopLoss.
   * @member {Long} relativeStopLoss
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.relativeStopLoss = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendOrderReq relativeTakeProfit.
   * @member {Long} relativeTakeProfit
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.relativeTakeProfit = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendOrderReq guaranteedStopLoss.
   * @member {boolean} guaranteedStopLoss
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.guaranteedStopLoss = false;

  /**
   * ProtoOAAmendOrderReq trailingStopLoss.
   * @member {boolean} trailingStopLoss
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.trailingStopLoss = false;

  /**
   * ProtoOAAmendOrderReq stopTriggerMethod.
   * @member {ProtoOAOrderTriggerMethod} stopTriggerMethod
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.stopTriggerMethod = 1;

  /**
   * Creates a new ProtoOAAmendOrderReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAAmendOrderReq
   * @static
   * @param {IProtoOAAmendOrderReq=} [properties] Properties to set
   * @returns {ProtoOAAmendOrderReq} ProtoOAAmendOrderReq instance
   */
  ProtoOAAmendOrderReq.create = function create(properties) {
    return new ProtoOAAmendOrderReq(properties);
  };

  /**
   * Encodes the specified ProtoOAAmendOrderReq message. Does not implicitly {@link ProtoOAAmendOrderReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAmendOrderReq
   * @static
   * @param {IProtoOAAmendOrderReq} message ProtoOAAmendOrderReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAmendOrderReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.orderId);
    if (message.volume != null && message.hasOwnProperty("volume"))
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.volume);
    if (message.limitPrice != null && message.hasOwnProperty("limitPrice"))
      writer.uint32(/* id 5, wireType 1 =*/ 41).double(message.limitPrice);
    if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
      writer.uint32(/* id 6, wireType 1 =*/ 49).double(message.stopPrice);
    if (
      message.expirationTimestamp != null &&
      message.hasOwnProperty("expirationTimestamp")
    )
      writer
        .uint32(/* id 7, wireType 0 =*/ 56)
        .int64(message.expirationTimestamp);
    if (message.stopLoss != null && message.hasOwnProperty("stopLoss"))
      writer.uint32(/* id 8, wireType 1 =*/ 65).double(message.stopLoss);
    if (message.takeProfit != null && message.hasOwnProperty("takeProfit"))
      writer.uint32(/* id 9, wireType 1 =*/ 73).double(message.takeProfit);
    if (
      message.slippageInPoints != null &&
      message.hasOwnProperty("slippageInPoints")
    )
      writer
        .uint32(/* id 10, wireType 0 =*/ 80)
        .int32(message.slippageInPoints);
    if (
      message.relativeStopLoss != null &&
      message.hasOwnProperty("relativeStopLoss")
    )
      writer
        .uint32(/* id 11, wireType 0 =*/ 88)
        .int64(message.relativeStopLoss);
    if (
      message.relativeTakeProfit != null &&
      message.hasOwnProperty("relativeTakeProfit")
    )
      writer
        .uint32(/* id 12, wireType 0 =*/ 96)
        .int64(message.relativeTakeProfit);
    if (
      message.guaranteedStopLoss != null &&
      message.hasOwnProperty("guaranteedStopLoss")
    )
      writer
        .uint32(/* id 13, wireType 0 =*/ 104)
        .bool(message.guaranteedStopLoss);
    if (
      message.trailingStopLoss != null &&
      message.hasOwnProperty("trailingStopLoss")
    )
      writer
        .uint32(/* id 14, wireType 0 =*/ 112)
        .bool(message.trailingStopLoss);
    if (
      message.stopTriggerMethod != null &&
      message.hasOwnProperty("stopTriggerMethod")
    )
      writer
        .uint32(/* id 15, wireType 0 =*/ 120)
        .int32(message.stopTriggerMethod);
    return writer;
  };

  /**
   * Decodes a ProtoOAAmendOrderReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAmendOrderReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAmendOrderReq} ProtoOAAmendOrderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAmendOrderReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAmendOrderReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.orderId = reader.int64();
          break;
        case 4:
          message.volume = reader.int64();
          break;
        case 5:
          message.limitPrice = reader.double();
          break;
        case 6:
          message.stopPrice = reader.double();
          break;
        case 7:
          message.expirationTimestamp = reader.int64();
          break;
        case 8:
          message.stopLoss = reader.double();
          break;
        case 9:
          message.takeProfit = reader.double();
          break;
        case 10:
          message.slippageInPoints = reader.int32();
          break;
        case 11:
          message.relativeStopLoss = reader.int64();
          break;
        case 12:
          message.relativeTakeProfit = reader.int64();
          break;
        case 13:
          message.guaranteedStopLoss = reader.bool();
          break;
        case 14:
          message.trailingStopLoss = reader.bool();
          break;
        case 15:
          message.stopTriggerMethod = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("orderId"))
      throw $util.ProtocolError("missing required 'orderId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAAmendOrderReq;
})();

$root.ProtoOAAmendPositionSLTPReq = (function() {
  /**
   * Properties of a ProtoOAAmendPositionSLTPReq.
   * @exports IProtoOAAmendPositionSLTPReq
   * @interface IProtoOAAmendPositionSLTPReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAmendPositionSLTPReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAAmendPositionSLTPReq ctidTraderAccountId
   * @property {Long} positionId ProtoOAAmendPositionSLTPReq positionId
   * @property {number|null} [stopLoss] ProtoOAAmendPositionSLTPReq stopLoss
   * @property {number|null} [takeProfit] ProtoOAAmendPositionSLTPReq takeProfit
   * @property {boolean|null} [guaranteedStopLoss] ProtoOAAmendPositionSLTPReq guaranteedStopLoss
   * @property {boolean|null} [trailingStopLoss] ProtoOAAmendPositionSLTPReq trailingStopLoss
   * @property {ProtoOAOrderTriggerMethod|null} [stopLossTriggerMethod] ProtoOAAmendPositionSLTPReq stopLossTriggerMethod
   */

  /**
   * Constructs a new ProtoOAAmendPositionSLTPReq.
   * @exports ProtoOAAmendPositionSLTPReq
   * @classdesc Request for amending StopLoss and TakeProfit of existing position. Allowed only if the accessToken has "trade" permissions for the trading account.
   * @implements IProtoOAAmendPositionSLTPReq
   * @constructor
   * @param {IProtoOAAmendPositionSLTPReq=} [properties] Properties to set
   */
  function ProtoOAAmendPositionSLTPReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAmendPositionSLTPReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAmendPositionSLTPReq
   * @instance
   */
  ProtoOAAmendPositionSLTPReq.prototype.payloadType = 2110;

  /**
   * ProtoOAAmendPositionSLTPReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAAmendPositionSLTPReq
   * @instance
   */
  ProtoOAAmendPositionSLTPReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendPositionSLTPReq positionId.
   * @member {Long} positionId
   * @memberof ProtoOAAmendPositionSLTPReq
   * @instance
   */
  ProtoOAAmendPositionSLTPReq.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendPositionSLTPReq stopLoss.
   * @member {number} stopLoss
   * @memberof ProtoOAAmendPositionSLTPReq
   * @instance
   */
  ProtoOAAmendPositionSLTPReq.prototype.stopLoss = 0;

  /**
   * ProtoOAAmendPositionSLTPReq takeProfit.
   * @member {number} takeProfit
   * @memberof ProtoOAAmendPositionSLTPReq
   * @instance
   */
  ProtoOAAmendPositionSLTPReq.prototype.takeProfit = 0;

  /**
   * ProtoOAAmendPositionSLTPReq guaranteedStopLoss.
   * @member {boolean} guaranteedStopLoss
   * @memberof ProtoOAAmendPositionSLTPReq
   * @instance
   */
  ProtoOAAmendPositionSLTPReq.prototype.guaranteedStopLoss = false;

  /**
   * ProtoOAAmendPositionSLTPReq trailingStopLoss.
   * @member {boolean} trailingStopLoss
   * @memberof ProtoOAAmendPositionSLTPReq
   * @instance
   */
  ProtoOAAmendPositionSLTPReq.prototype.trailingStopLoss = false;

  /**
   * ProtoOAAmendPositionSLTPReq stopLossTriggerMethod.
   * @member {ProtoOAOrderTriggerMethod} stopLossTriggerMethod
   * @memberof ProtoOAAmendPositionSLTPReq
   * @instance
   */
  ProtoOAAmendPositionSLTPReq.prototype.stopLossTriggerMethod = 1;

  /**
   * Creates a new ProtoOAAmendPositionSLTPReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAAmendPositionSLTPReq
   * @static
   * @param {IProtoOAAmendPositionSLTPReq=} [properties] Properties to set
   * @returns {ProtoOAAmendPositionSLTPReq} ProtoOAAmendPositionSLTPReq instance
   */
  ProtoOAAmendPositionSLTPReq.create = function create(properties) {
    return new ProtoOAAmendPositionSLTPReq(properties);
  };

  /**
   * Encodes the specified ProtoOAAmendPositionSLTPReq message. Does not implicitly {@link ProtoOAAmendPositionSLTPReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAmendPositionSLTPReq
   * @static
   * @param {IProtoOAAmendPositionSLTPReq} message ProtoOAAmendPositionSLTPReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAmendPositionSLTPReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.positionId);
    if (message.stopLoss != null && message.hasOwnProperty("stopLoss"))
      writer.uint32(/* id 4, wireType 1 =*/ 33).double(message.stopLoss);
    if (message.takeProfit != null && message.hasOwnProperty("takeProfit"))
      writer.uint32(/* id 5, wireType 1 =*/ 41).double(message.takeProfit);
    if (
      message.guaranteedStopLoss != null &&
      message.hasOwnProperty("guaranteedStopLoss")
    )
      writer
        .uint32(/* id 7, wireType 0 =*/ 56)
        .bool(message.guaranteedStopLoss);
    if (
      message.trailingStopLoss != null &&
      message.hasOwnProperty("trailingStopLoss")
    )
      writer.uint32(/* id 8, wireType 0 =*/ 64).bool(message.trailingStopLoss);
    if (
      message.stopLossTriggerMethod != null &&
      message.hasOwnProperty("stopLossTriggerMethod")
    )
      writer
        .uint32(/* id 9, wireType 0 =*/ 72)
        .int32(message.stopLossTriggerMethod);
    return writer;
  };

  /**
   * Decodes a ProtoOAAmendPositionSLTPReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAmendPositionSLTPReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAmendPositionSLTPReq} ProtoOAAmendPositionSLTPReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAmendPositionSLTPReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAmendPositionSLTPReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.positionId = reader.int64();
          break;
        case 4:
          message.stopLoss = reader.double();
          break;
        case 5:
          message.takeProfit = reader.double();
          break;
        case 7:
          message.guaranteedStopLoss = reader.bool();
          break;
        case 8:
          message.trailingStopLoss = reader.bool();
          break;
        case 9:
          message.stopLossTriggerMethod = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("positionId"))
      throw $util.ProtocolError("missing required 'positionId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAAmendPositionSLTPReq;
})();

$root.ProtoOAClosePositionReq = (function() {
  /**
   * Properties of a ProtoOAClosePositionReq.
   * @exports IProtoOAClosePositionReq
   * @interface IProtoOAClosePositionReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAClosePositionReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAClosePositionReq ctidTraderAccountId
   * @property {Long} positionId ProtoOAClosePositionReq positionId
   * @property {Long} volume ProtoOAClosePositionReq volume
   */

  /**
   * Constructs a new ProtoOAClosePositionReq.
   * @exports ProtoOAClosePositionReq
   * @classdesc Request for closing or partially closing of an existing position. Allowed only if the accessToken has "trade" permissions for the trading account.
   * @implements IProtoOAClosePositionReq
   * @constructor
   * @param {IProtoOAClosePositionReq=} [properties] Properties to set
   */
  function ProtoOAClosePositionReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAClosePositionReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAClosePositionReq
   * @instance
   */
  ProtoOAClosePositionReq.prototype.payloadType = 2111;

  /**
   * ProtoOAClosePositionReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAClosePositionReq
   * @instance
   */
  ProtoOAClosePositionReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAClosePositionReq positionId.
   * @member {Long} positionId
   * @memberof ProtoOAClosePositionReq
   * @instance
   */
  ProtoOAClosePositionReq.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAClosePositionReq volume.
   * @member {Long} volume
   * @memberof ProtoOAClosePositionReq
   * @instance
   */
  ProtoOAClosePositionReq.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAClosePositionReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAClosePositionReq
   * @static
   * @param {IProtoOAClosePositionReq=} [properties] Properties to set
   * @returns {ProtoOAClosePositionReq} ProtoOAClosePositionReq instance
   */
  ProtoOAClosePositionReq.create = function create(properties) {
    return new ProtoOAClosePositionReq(properties);
  };

  /**
   * Encodes the specified ProtoOAClosePositionReq message. Does not implicitly {@link ProtoOAClosePositionReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAClosePositionReq
   * @static
   * @param {IProtoOAClosePositionReq} message ProtoOAClosePositionReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAClosePositionReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.positionId);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.volume);
    return writer;
  };

  /**
   * Decodes a ProtoOAClosePositionReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAClosePositionReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAClosePositionReq} ProtoOAClosePositionReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAClosePositionReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAClosePositionReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.positionId = reader.int64();
          break;
        case 4:
          message.volume = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("positionId"))
      throw $util.ProtocolError("missing required 'positionId'", {
        instance: message
      });
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message
      });
    return message;
  };

  return ProtoOAClosePositionReq;
})();

$root.ProtoOATrailingSLChangedEvent = (function() {
  /**
   * Properties of a ProtoOATrailingSLChangedEvent.
   * @exports IProtoOATrailingSLChangedEvent
   * @interface IProtoOATrailingSLChangedEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOATrailingSLChangedEvent payloadType
   * @property {Long} ctidTraderAccountId ProtoOATrailingSLChangedEvent ctidTraderAccountId
   * @property {Long} positionId ProtoOATrailingSLChangedEvent positionId
   * @property {Long} orderId ProtoOATrailingSLChangedEvent orderId
   * @property {number} stopPrice ProtoOATrailingSLChangedEvent stopPrice
   * @property {Long} utcLastUpdateTimestamp ProtoOATrailingSLChangedEvent utcLastUpdateTimestamp
   */

  /**
   * Constructs a new ProtoOATrailingSLChangedEvent.
   * @exports ProtoOATrailingSLChangedEvent
   * @classdesc Event that is sent when the level of the Trailing Stop Loss is changed due to the price level changes.
   * @implements IProtoOATrailingSLChangedEvent
   * @constructor
   * @param {IProtoOATrailingSLChangedEvent=} [properties] Properties to set
   */
  function ProtoOATrailingSLChangedEvent(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATrailingSLChangedEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOATrailingSLChangedEvent
   * @instance
   */
  ProtoOATrailingSLChangedEvent.prototype.payloadType = 2107;

  /**
   * ProtoOATrailingSLChangedEvent ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOATrailingSLChangedEvent
   * @instance
   */
  ProtoOATrailingSLChangedEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrailingSLChangedEvent positionId.
   * @member {Long} positionId
   * @memberof ProtoOATrailingSLChangedEvent
   * @instance
   */
  ProtoOATrailingSLChangedEvent.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrailingSLChangedEvent orderId.
   * @member {Long} orderId
   * @memberof ProtoOATrailingSLChangedEvent
   * @instance
   */
  ProtoOATrailingSLChangedEvent.prototype.orderId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrailingSLChangedEvent stopPrice.
   * @member {number} stopPrice
   * @memberof ProtoOATrailingSLChangedEvent
   * @instance
   */
  ProtoOATrailingSLChangedEvent.prototype.stopPrice = 0;

  /**
   * ProtoOATrailingSLChangedEvent utcLastUpdateTimestamp.
   * @member {Long} utcLastUpdateTimestamp
   * @memberof ProtoOATrailingSLChangedEvent
   * @instance
   */
  ProtoOATrailingSLChangedEvent.prototype.utcLastUpdateTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOATrailingSLChangedEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOATrailingSLChangedEvent
   * @static
   * @param {IProtoOATrailingSLChangedEvent=} [properties] Properties to set
   * @returns {ProtoOATrailingSLChangedEvent} ProtoOATrailingSLChangedEvent instance
   */
  ProtoOATrailingSLChangedEvent.create = function create(properties) {
    return new ProtoOATrailingSLChangedEvent(properties);
  };

  /**
   * Encodes the specified ProtoOATrailingSLChangedEvent message. Does not implicitly {@link ProtoOATrailingSLChangedEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATrailingSLChangedEvent
   * @static
   * @param {IProtoOATrailingSLChangedEvent} message ProtoOATrailingSLChangedEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATrailingSLChangedEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.positionId);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.orderId);
    writer.uint32(/* id 5, wireType 1 =*/ 41).double(message.stopPrice);
    writer
      .uint32(/* id 6, wireType 0 =*/ 48)
      .int64(message.utcLastUpdateTimestamp);
    return writer;
  };

  /**
   * Decodes a ProtoOATrailingSLChangedEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATrailingSLChangedEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATrailingSLChangedEvent} ProtoOATrailingSLChangedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATrailingSLChangedEvent.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATrailingSLChangedEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.positionId = reader.int64();
          break;
        case 4:
          message.orderId = reader.int64();
          break;
        case 5:
          message.stopPrice = reader.double();
          break;
        case 6:
          message.utcLastUpdateTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("positionId"))
      throw $util.ProtocolError("missing required 'positionId'", {
        instance: message
      });
    if (!message.hasOwnProperty("orderId"))
      throw $util.ProtocolError("missing required 'orderId'", {
        instance: message
      });
    if (!message.hasOwnProperty("stopPrice"))
      throw $util.ProtocolError("missing required 'stopPrice'", {
        instance: message
      });
    if (!message.hasOwnProperty("utcLastUpdateTimestamp"))
      throw $util.ProtocolError("missing required 'utcLastUpdateTimestamp'", {
        instance: message
      });
    return message;
  };

  return ProtoOATrailingSLChangedEvent;
})();

$root.ProtoOAAssetListReq = (function() {
  /**
   * Properties of a ProtoOAAssetListReq.
   * @exports IProtoOAAssetListReq
   * @interface IProtoOAAssetListReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAssetListReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAAssetListReq ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAAssetListReq.
   * @exports ProtoOAAssetListReq
   * @classdesc Request for the list of assets available for a trader's account.
   * @implements IProtoOAAssetListReq
   * @constructor
   * @param {IProtoOAAssetListReq=} [properties] Properties to set
   */
  function ProtoOAAssetListReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAssetListReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAssetListReq
   * @instance
   */
  ProtoOAAssetListReq.prototype.payloadType = 2112;

  /**
   * ProtoOAAssetListReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAAssetListReq
   * @instance
   */
  ProtoOAAssetListReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAAssetListReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAAssetListReq
   * @static
   * @param {IProtoOAAssetListReq=} [properties] Properties to set
   * @returns {ProtoOAAssetListReq} ProtoOAAssetListReq instance
   */
  ProtoOAAssetListReq.create = function create(properties) {
    return new ProtoOAAssetListReq(properties);
  };

  /**
   * Encodes the specified ProtoOAAssetListReq message. Does not implicitly {@link ProtoOAAssetListReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAssetListReq
   * @static
   * @param {IProtoOAAssetListReq} message ProtoOAAssetListReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAssetListReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAAssetListReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAssetListReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAssetListReq} ProtoOAAssetListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAssetListReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAssetListReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAAssetListReq;
})();

$root.ProtoOAAssetListRes = (function() {
  /**
   * Properties of a ProtoOAAssetListRes.
   * @exports IProtoOAAssetListRes
   * @interface IProtoOAAssetListRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAssetListRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOAAssetListRes ctidTraderAccountId
   * @property {Array.<IProtoOAAsset>|null} [asset] ProtoOAAssetListRes asset
   */

  /**
   * Constructs a new ProtoOAAssetListRes.
   * @exports ProtoOAAssetListRes
   * @classdesc Response to the ProtoOAAssetListReq request.
   * @implements IProtoOAAssetListRes
   * @constructor
   * @param {IProtoOAAssetListRes=} [properties] Properties to set
   */
  function ProtoOAAssetListRes(properties) {
    this.asset = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAssetListRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAssetListRes
   * @instance
   */
  ProtoOAAssetListRes.prototype.payloadType = 2113;

  /**
   * ProtoOAAssetListRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAAssetListRes
   * @instance
   */
  ProtoOAAssetListRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAssetListRes asset.
   * @member {Array.<IProtoOAAsset>} asset
   * @memberof ProtoOAAssetListRes
   * @instance
   */
  ProtoOAAssetListRes.prototype.asset = $util.emptyArray;

  /**
   * Creates a new ProtoOAAssetListRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAAssetListRes
   * @static
   * @param {IProtoOAAssetListRes=} [properties] Properties to set
   * @returns {ProtoOAAssetListRes} ProtoOAAssetListRes instance
   */
  ProtoOAAssetListRes.create = function create(properties) {
    return new ProtoOAAssetListRes(properties);
  };

  /**
   * Encodes the specified ProtoOAAssetListRes message. Does not implicitly {@link ProtoOAAssetListRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAssetListRes
   * @static
   * @param {IProtoOAAssetListRes} message ProtoOAAssetListRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAssetListRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.asset != null && message.asset.length)
      for (var i = 0; i < message.asset.length; ++i)
        $root.ProtoOAAsset.encode(
          message.asset[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOAAssetListRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAssetListRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAssetListRes} ProtoOAAssetListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAssetListRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAssetListRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.asset && message.asset.length)) message.asset = [];
          message.asset.push(
            $root.ProtoOAAsset.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAAssetListRes;
})();

$root.ProtoOASymbolsListReq = (function() {
  /**
   * Properties of a ProtoOASymbolsListReq.
   * @exports IProtoOASymbolsListReq
   * @interface IProtoOASymbolsListReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolsListReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOASymbolsListReq ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOASymbolsListReq.
   * @exports ProtoOASymbolsListReq
   * @classdesc Request for a list of symbols available for a trading account. Symbol entries are returned with the limited set of fields.
   * @implements IProtoOASymbolsListReq
   * @constructor
   * @param {IProtoOASymbolsListReq=} [properties] Properties to set
   */
  function ProtoOASymbolsListReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolsListReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolsListReq
   * @instance
   */
  ProtoOASymbolsListReq.prototype.payloadType = 2114;

  /**
   * ProtoOASymbolsListReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASymbolsListReq
   * @instance
   */
  ProtoOASymbolsListReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOASymbolsListReq instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolsListReq
   * @static
   * @param {IProtoOASymbolsListReq=} [properties] Properties to set
   * @returns {ProtoOASymbolsListReq} ProtoOASymbolsListReq instance
   */
  ProtoOASymbolsListReq.create = function create(properties) {
    return new ProtoOASymbolsListReq(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolsListReq message. Does not implicitly {@link ProtoOASymbolsListReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolsListReq
   * @static
   * @param {IProtoOASymbolsListReq} message ProtoOASymbolsListReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolsListReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolsListReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolsListReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolsListReq} ProtoOASymbolsListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolsListReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolsListReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASymbolsListReq;
})();

$root.ProtoOASymbolsListRes = (function() {
  /**
   * Properties of a ProtoOASymbolsListRes.
   * @exports IProtoOASymbolsListRes
   * @interface IProtoOASymbolsListRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolsListRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOASymbolsListRes ctidTraderAccountId
   * @property {Array.<IProtoOALightSymbol>|null} [symbol] ProtoOASymbolsListRes symbol
   */

  /**
   * Constructs a new ProtoOASymbolsListRes.
   * @exports ProtoOASymbolsListRes
   * @classdesc Response to the ProtoOASymbolsListReq request.
   * @implements IProtoOASymbolsListRes
   * @constructor
   * @param {IProtoOASymbolsListRes=} [properties] Properties to set
   */
  function ProtoOASymbolsListRes(properties) {
    this.symbol = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolsListRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolsListRes
   * @instance
   */
  ProtoOASymbolsListRes.prototype.payloadType = 2115;

  /**
   * ProtoOASymbolsListRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASymbolsListRes
   * @instance
   */
  ProtoOASymbolsListRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolsListRes symbol.
   * @member {Array.<IProtoOALightSymbol>} symbol
   * @memberof ProtoOASymbolsListRes
   * @instance
   */
  ProtoOASymbolsListRes.prototype.symbol = $util.emptyArray;

  /**
   * Creates a new ProtoOASymbolsListRes instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolsListRes
   * @static
   * @param {IProtoOASymbolsListRes=} [properties] Properties to set
   * @returns {ProtoOASymbolsListRes} ProtoOASymbolsListRes instance
   */
  ProtoOASymbolsListRes.create = function create(properties) {
    return new ProtoOASymbolsListRes(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolsListRes message. Does not implicitly {@link ProtoOASymbolsListRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolsListRes
   * @static
   * @param {IProtoOASymbolsListRes} message ProtoOASymbolsListRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolsListRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbol != null && message.symbol.length)
      for (var i = 0; i < message.symbol.length; ++i)
        $root.ProtoOALightSymbol.encode(
          message.symbol[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolsListRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolsListRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolsListRes} ProtoOASymbolsListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolsListRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolsListRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.symbol && message.symbol.length)) message.symbol = [];
          message.symbol.push(
            $root.ProtoOALightSymbol.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASymbolsListRes;
})();

$root.ProtoOASymbolByIdReq = (function() {
  /**
   * Properties of a ProtoOASymbolByIdReq.
   * @exports IProtoOASymbolByIdReq
   * @interface IProtoOASymbolByIdReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolByIdReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOASymbolByIdReq ctidTraderAccountId
   * @property {Array.<Long>|null} [symbolId] ProtoOASymbolByIdReq symbolId
   */

  /**
   * Constructs a new ProtoOASymbolByIdReq.
   * @exports ProtoOASymbolByIdReq
   * @classdesc Request for getting a full symbol entity.
   * @implements IProtoOASymbolByIdReq
   * @constructor
   * @param {IProtoOASymbolByIdReq=} [properties] Properties to set
   */
  function ProtoOASymbolByIdReq(properties) {
    this.symbolId = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolByIdReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolByIdReq
   * @instance
   */
  ProtoOASymbolByIdReq.prototype.payloadType = 2116;

  /**
   * ProtoOASymbolByIdReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASymbolByIdReq
   * @instance
   */
  ProtoOASymbolByIdReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolByIdReq symbolId.
   * @member {Array.<Long>} symbolId
   * @memberof ProtoOASymbolByIdReq
   * @instance
   */
  ProtoOASymbolByIdReq.prototype.symbolId = $util.emptyArray;

  /**
   * Creates a new ProtoOASymbolByIdReq instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolByIdReq
   * @static
   * @param {IProtoOASymbolByIdReq=} [properties] Properties to set
   * @returns {ProtoOASymbolByIdReq} ProtoOASymbolByIdReq instance
   */
  ProtoOASymbolByIdReq.create = function create(properties) {
    return new ProtoOASymbolByIdReq(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolByIdReq message. Does not implicitly {@link ProtoOASymbolByIdReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolByIdReq
   * @static
   * @param {IProtoOASymbolByIdReq} message ProtoOASymbolByIdReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolByIdReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbolId != null && message.symbolId.length)
      for (var i = 0; i < message.symbolId.length; ++i)
        writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId[i]);
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolByIdReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolByIdReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolByIdReq} ProtoOASymbolByIdReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolByIdReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolByIdReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.symbolId && message.symbolId.length))
            message.symbolId = [];
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) message.symbolId.push(reader.int64());
          } else message.symbolId.push(reader.int64());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASymbolByIdReq;
})();

$root.ProtoOASymbolByIdRes = (function() {
  /**
   * Properties of a ProtoOASymbolByIdRes.
   * @exports IProtoOASymbolByIdRes
   * @interface IProtoOASymbolByIdRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolByIdRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOASymbolByIdRes ctidTraderAccountId
   * @property {Array.<IProtoOASymbol>|null} [symbol] ProtoOASymbolByIdRes symbol
   */

  /**
   * Constructs a new ProtoOASymbolByIdRes.
   * @exports ProtoOASymbolByIdRes
   * @classdesc Response to the ProtoOASymbolByIdReq request.
   * @implements IProtoOASymbolByIdRes
   * @constructor
   * @param {IProtoOASymbolByIdRes=} [properties] Properties to set
   */
  function ProtoOASymbolByIdRes(properties) {
    this.symbol = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolByIdRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolByIdRes
   * @instance
   */
  ProtoOASymbolByIdRes.prototype.payloadType = 2117;

  /**
   * ProtoOASymbolByIdRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASymbolByIdRes
   * @instance
   */
  ProtoOASymbolByIdRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolByIdRes symbol.
   * @member {Array.<IProtoOASymbol>} symbol
   * @memberof ProtoOASymbolByIdRes
   * @instance
   */
  ProtoOASymbolByIdRes.prototype.symbol = $util.emptyArray;

  /**
   * Creates a new ProtoOASymbolByIdRes instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolByIdRes
   * @static
   * @param {IProtoOASymbolByIdRes=} [properties] Properties to set
   * @returns {ProtoOASymbolByIdRes} ProtoOASymbolByIdRes instance
   */
  ProtoOASymbolByIdRes.create = function create(properties) {
    return new ProtoOASymbolByIdRes(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolByIdRes message. Does not implicitly {@link ProtoOASymbolByIdRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolByIdRes
   * @static
   * @param {IProtoOASymbolByIdRes} message ProtoOASymbolByIdRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolByIdRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbol != null && message.symbol.length)
      for (var i = 0; i < message.symbol.length; ++i)
        $root.ProtoOASymbol.encode(
          message.symbol[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolByIdRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolByIdRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolByIdRes} ProtoOASymbolByIdRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolByIdRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolByIdRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.symbol && message.symbol.length)) message.symbol = [];
          message.symbol.push(
            $root.ProtoOASymbol.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASymbolByIdRes;
})();

$root.ProtoOASymbolsForConversionReq = (function() {
  /**
   * Properties of a ProtoOASymbolsForConversionReq.
   * @exports IProtoOASymbolsForConversionReq
   * @interface IProtoOASymbolsForConversionReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolsForConversionReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOASymbolsForConversionReq ctidTraderAccountId
   * @property {Long} firstAssetId ProtoOASymbolsForConversionReq firstAssetId
   * @property {Long} lastAssetId ProtoOASymbolsForConversionReq lastAssetId
   */

  /**
   * Constructs a new ProtoOASymbolsForConversionReq.
   * @exports ProtoOASymbolsForConversionReq
   * @classdesc Request for getting a conversion chain between two assets that consists of several symbols. Use when no direct quote is available
   * @implements IProtoOASymbolsForConversionReq
   * @constructor
   * @param {IProtoOASymbolsForConversionReq=} [properties] Properties to set
   */
  function ProtoOASymbolsForConversionReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolsForConversionReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolsForConversionReq
   * @instance
   */
  ProtoOASymbolsForConversionReq.prototype.payloadType = 2118;

  /**
   * ProtoOASymbolsForConversionReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASymbolsForConversionReq
   * @instance
   */
  ProtoOASymbolsForConversionReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolsForConversionReq firstAssetId.
   * @member {Long} firstAssetId
   * @memberof ProtoOASymbolsForConversionReq
   * @instance
   */
  ProtoOASymbolsForConversionReq.prototype.firstAssetId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolsForConversionReq lastAssetId.
   * @member {Long} lastAssetId
   * @memberof ProtoOASymbolsForConversionReq
   * @instance
   */
  ProtoOASymbolsForConversionReq.prototype.lastAssetId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOASymbolsForConversionReq instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolsForConversionReq
   * @static
   * @param {IProtoOASymbolsForConversionReq=} [properties] Properties to set
   * @returns {ProtoOASymbolsForConversionReq} ProtoOASymbolsForConversionReq instance
   */
  ProtoOASymbolsForConversionReq.create = function create(properties) {
    return new ProtoOASymbolsForConversionReq(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolsForConversionReq message. Does not implicitly {@link ProtoOASymbolsForConversionReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolsForConversionReq
   * @static
   * @param {IProtoOASymbolsForConversionReq} message ProtoOASymbolsForConversionReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolsForConversionReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.firstAssetId);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.lastAssetId);
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolsForConversionReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolsForConversionReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolsForConversionReq} ProtoOASymbolsForConversionReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolsForConversionReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolsForConversionReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.firstAssetId = reader.int64();
          break;
        case 4:
          message.lastAssetId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("firstAssetId"))
      throw $util.ProtocolError("missing required 'firstAssetId'", {
        instance: message
      });
    if (!message.hasOwnProperty("lastAssetId"))
      throw $util.ProtocolError("missing required 'lastAssetId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASymbolsForConversionReq;
})();

$root.ProtoOASymbolsForConversionRes = (function() {
  /**
   * Properties of a ProtoOASymbolsForConversionRes.
   * @exports IProtoOASymbolsForConversionRes
   * @interface IProtoOASymbolsForConversionRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolsForConversionRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOASymbolsForConversionRes ctidTraderAccountId
   * @property {Array.<IProtoOALightSymbol>|null} [symbol] ProtoOASymbolsForConversionRes symbol
   */

  /**
   * Constructs a new ProtoOASymbolsForConversionRes.
   * @exports ProtoOASymbolsForConversionRes
   * @classdesc Response to the ProtoOASymbolsForConversionReq request.
   * @implements IProtoOASymbolsForConversionRes
   * @constructor
   * @param {IProtoOASymbolsForConversionRes=} [properties] Properties to set
   */
  function ProtoOASymbolsForConversionRes(properties) {
    this.symbol = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolsForConversionRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolsForConversionRes
   * @instance
   */
  ProtoOASymbolsForConversionRes.prototype.payloadType = 2119;

  /**
   * ProtoOASymbolsForConversionRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASymbolsForConversionRes
   * @instance
   */
  ProtoOASymbolsForConversionRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolsForConversionRes symbol.
   * @member {Array.<IProtoOALightSymbol>} symbol
   * @memberof ProtoOASymbolsForConversionRes
   * @instance
   */
  ProtoOASymbolsForConversionRes.prototype.symbol = $util.emptyArray;

  /**
   * Creates a new ProtoOASymbolsForConversionRes instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolsForConversionRes
   * @static
   * @param {IProtoOASymbolsForConversionRes=} [properties] Properties to set
   * @returns {ProtoOASymbolsForConversionRes} ProtoOASymbolsForConversionRes instance
   */
  ProtoOASymbolsForConversionRes.create = function create(properties) {
    return new ProtoOASymbolsForConversionRes(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolsForConversionRes message. Does not implicitly {@link ProtoOASymbolsForConversionRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolsForConversionRes
   * @static
   * @param {IProtoOASymbolsForConversionRes} message ProtoOASymbolsForConversionRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolsForConversionRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbol != null && message.symbol.length)
      for (var i = 0; i < message.symbol.length; ++i)
        $root.ProtoOALightSymbol.encode(
          message.symbol[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolsForConversionRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolsForConversionRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolsForConversionRes} ProtoOASymbolsForConversionRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolsForConversionRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolsForConversionRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.symbol && message.symbol.length)) message.symbol = [];
          message.symbol.push(
            $root.ProtoOALightSymbol.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASymbolsForConversionRes;
})();

$root.ProtoOASymbolChangedEvent = (function() {
  /**
   * Properties of a ProtoOASymbolChangedEvent.
   * @exports IProtoOASymbolChangedEvent
   * @interface IProtoOASymbolChangedEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolChangedEvent payloadType
   * @property {Long} ctidTraderAccountId ProtoOASymbolChangedEvent ctidTraderAccountId
   * @property {Array.<Long>|null} [symbolId] ProtoOASymbolChangedEvent symbolId
   */

  /**
   * Constructs a new ProtoOASymbolChangedEvent.
   * @exports ProtoOASymbolChangedEvent
   * @classdesc Event that is sent when the symbol is changed on the Server side.
   * @implements IProtoOASymbolChangedEvent
   * @constructor
   * @param {IProtoOASymbolChangedEvent=} [properties] Properties to set
   */
  function ProtoOASymbolChangedEvent(properties) {
    this.symbolId = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolChangedEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolChangedEvent
   * @instance
   */
  ProtoOASymbolChangedEvent.prototype.payloadType = 2120;

  /**
   * ProtoOASymbolChangedEvent ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASymbolChangedEvent
   * @instance
   */
  ProtoOASymbolChangedEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolChangedEvent symbolId.
   * @member {Array.<Long>} symbolId
   * @memberof ProtoOASymbolChangedEvent
   * @instance
   */
  ProtoOASymbolChangedEvent.prototype.symbolId = $util.emptyArray;

  /**
   * Creates a new ProtoOASymbolChangedEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolChangedEvent
   * @static
   * @param {IProtoOASymbolChangedEvent=} [properties] Properties to set
   * @returns {ProtoOASymbolChangedEvent} ProtoOASymbolChangedEvent instance
   */
  ProtoOASymbolChangedEvent.create = function create(properties) {
    return new ProtoOASymbolChangedEvent(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolChangedEvent message. Does not implicitly {@link ProtoOASymbolChangedEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolChangedEvent
   * @static
   * @param {IProtoOASymbolChangedEvent} message ProtoOASymbolChangedEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolChangedEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbolId != null && message.symbolId.length)
      for (var i = 0; i < message.symbolId.length; ++i)
        writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId[i]);
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolChangedEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolChangedEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolChangedEvent} ProtoOASymbolChangedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolChangedEvent.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolChangedEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.symbolId && message.symbolId.length))
            message.symbolId = [];
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) message.symbolId.push(reader.int64());
          } else message.symbolId.push(reader.int64());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASymbolChangedEvent;
})();

$root.ProtoOAAssetClassListReq = (function() {
  /**
   * Properties of a ProtoOAAssetClassListReq.
   * @exports IProtoOAAssetClassListReq
   * @interface IProtoOAAssetClassListReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAssetClassListReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAAssetClassListReq ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAAssetClassListReq.
   * @exports ProtoOAAssetClassListReq
   * @classdesc Request for a list of asset classes available for the trader's account.
   * @implements IProtoOAAssetClassListReq
   * @constructor
   * @param {IProtoOAAssetClassListReq=} [properties] Properties to set
   */
  function ProtoOAAssetClassListReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAssetClassListReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAssetClassListReq
   * @instance
   */
  ProtoOAAssetClassListReq.prototype.payloadType = 2153;

  /**
   * ProtoOAAssetClassListReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAAssetClassListReq
   * @instance
   */
  ProtoOAAssetClassListReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAAssetClassListReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAAssetClassListReq
   * @static
   * @param {IProtoOAAssetClassListReq=} [properties] Properties to set
   * @returns {ProtoOAAssetClassListReq} ProtoOAAssetClassListReq instance
   */
  ProtoOAAssetClassListReq.create = function create(properties) {
    return new ProtoOAAssetClassListReq(properties);
  };

  /**
   * Encodes the specified ProtoOAAssetClassListReq message. Does not implicitly {@link ProtoOAAssetClassListReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAssetClassListReq
   * @static
   * @param {IProtoOAAssetClassListReq} message ProtoOAAssetClassListReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAssetClassListReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAAssetClassListReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAssetClassListReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAssetClassListReq} ProtoOAAssetClassListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAssetClassListReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAssetClassListReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAAssetClassListReq;
})();

$root.ProtoOAAssetClassListRes = (function() {
  /**
   * Properties of a ProtoOAAssetClassListRes.
   * @exports IProtoOAAssetClassListRes
   * @interface IProtoOAAssetClassListRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAssetClassListRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOAAssetClassListRes ctidTraderAccountId
   * @property {Array.<IProtoOAAssetClass>|null} [assetClass] ProtoOAAssetClassListRes assetClass
   */

  /**
   * Constructs a new ProtoOAAssetClassListRes.
   * @exports ProtoOAAssetClassListRes
   * @classdesc Response to the ProtoOAAssetListReq request.
   * @implements IProtoOAAssetClassListRes
   * @constructor
   * @param {IProtoOAAssetClassListRes=} [properties] Properties to set
   */
  function ProtoOAAssetClassListRes(properties) {
    this.assetClass = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAssetClassListRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAssetClassListRes
   * @instance
   */
  ProtoOAAssetClassListRes.prototype.payloadType = 2154;

  /**
   * ProtoOAAssetClassListRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAAssetClassListRes
   * @instance
   */
  ProtoOAAssetClassListRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAssetClassListRes assetClass.
   * @member {Array.<IProtoOAAssetClass>} assetClass
   * @memberof ProtoOAAssetClassListRes
   * @instance
   */
  ProtoOAAssetClassListRes.prototype.assetClass = $util.emptyArray;

  /**
   * Creates a new ProtoOAAssetClassListRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAAssetClassListRes
   * @static
   * @param {IProtoOAAssetClassListRes=} [properties] Properties to set
   * @returns {ProtoOAAssetClassListRes} ProtoOAAssetClassListRes instance
   */
  ProtoOAAssetClassListRes.create = function create(properties) {
    return new ProtoOAAssetClassListRes(properties);
  };

  /**
   * Encodes the specified ProtoOAAssetClassListRes message. Does not implicitly {@link ProtoOAAssetClassListRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAssetClassListRes
   * @static
   * @param {IProtoOAAssetClassListRes} message ProtoOAAssetClassListRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAssetClassListRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.assetClass != null && message.assetClass.length)
      for (var i = 0; i < message.assetClass.length; ++i)
        $root.ProtoOAAssetClass.encode(
          message.assetClass[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOAAssetClassListRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAssetClassListRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAssetClassListRes} ProtoOAAssetClassListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAssetClassListRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAssetClassListRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.assetClass && message.assetClass.length))
            message.assetClass = [];
          message.assetClass.push(
            $root.ProtoOAAssetClass.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAAssetClassListRes;
})();

$root.ProtoOATraderReq = (function() {
  /**
   * Properties of a ProtoOATraderReq.
   * @exports IProtoOATraderReq
   * @interface IProtoOATraderReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOATraderReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOATraderReq ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOATraderReq.
   * @exports ProtoOATraderReq
   * @classdesc Request for getting data of Trader's Account.
   * @implements IProtoOATraderReq
   * @constructor
   * @param {IProtoOATraderReq=} [properties] Properties to set
   */
  function ProtoOATraderReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATraderReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOATraderReq
   * @instance
   */
  ProtoOATraderReq.prototype.payloadType = 2121;

  /**
   * ProtoOATraderReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOATraderReq
   * @instance
   */
  ProtoOATraderReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOATraderReq instance using the specified properties.
   * @function create
   * @memberof ProtoOATraderReq
   * @static
   * @param {IProtoOATraderReq=} [properties] Properties to set
   * @returns {ProtoOATraderReq} ProtoOATraderReq instance
   */
  ProtoOATraderReq.create = function create(properties) {
    return new ProtoOATraderReq(properties);
  };

  /**
   * Encodes the specified ProtoOATraderReq message. Does not implicitly {@link ProtoOATraderReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATraderReq
   * @static
   * @param {IProtoOATraderReq} message ProtoOATraderReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATraderReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOATraderReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATraderReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATraderReq} ProtoOATraderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATraderReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATraderReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOATraderReq;
})();

$root.ProtoOATraderRes = (function() {
  /**
   * Properties of a ProtoOATraderRes.
   * @exports IProtoOATraderRes
   * @interface IProtoOATraderRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOATraderRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOATraderRes ctidTraderAccountId
   * @property {IProtoOATrader} trader ProtoOATraderRes trader
   */

  /**
   * Constructs a new ProtoOATraderRes.
   * @exports ProtoOATraderRes
   * @classdesc Response to the ProtoOATraderReq request.
   * @implements IProtoOATraderRes
   * @constructor
   * @param {IProtoOATraderRes=} [properties] Properties to set
   */
  function ProtoOATraderRes(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATraderRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOATraderRes
   * @instance
   */
  ProtoOATraderRes.prototype.payloadType = 2122;

  /**
   * ProtoOATraderRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOATraderRes
   * @instance
   */
  ProtoOATraderRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATraderRes trader.
   * @member {IProtoOATrader} trader
   * @memberof ProtoOATraderRes
   * @instance
   */
  ProtoOATraderRes.prototype.trader = null;

  /**
   * Creates a new ProtoOATraderRes instance using the specified properties.
   * @function create
   * @memberof ProtoOATraderRes
   * @static
   * @param {IProtoOATraderRes=} [properties] Properties to set
   * @returns {ProtoOATraderRes} ProtoOATraderRes instance
   */
  ProtoOATraderRes.create = function create(properties) {
    return new ProtoOATraderRes(properties);
  };

  /**
   * Encodes the specified ProtoOATraderRes message. Does not implicitly {@link ProtoOATraderRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATraderRes
   * @static
   * @param {IProtoOATraderRes} message ProtoOATraderRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATraderRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    $root.ProtoOATrader.encode(
      message.trader,
      writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
    ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOATraderRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATraderRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATraderRes} ProtoOATraderRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATraderRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATraderRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.trader = $root.ProtoOATrader.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("trader"))
      throw $util.ProtocolError("missing required 'trader'", {
        instance: message
      });
    return message;
  };

  return ProtoOATraderRes;
})();

$root.ProtoOATraderUpdatedEvent = (function() {
  /**
   * Properties of a ProtoOATraderUpdatedEvent.
   * @exports IProtoOATraderUpdatedEvent
   * @interface IProtoOATraderUpdatedEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOATraderUpdatedEvent payloadType
   * @property {Long} ctidTraderAccountId ProtoOATraderUpdatedEvent ctidTraderAccountId
   * @property {IProtoOATrader} trader ProtoOATraderUpdatedEvent trader
   */

  /**
   * Constructs a new ProtoOATraderUpdatedEvent.
   * @exports ProtoOATraderUpdatedEvent
   * @classdesc Event that is sent when a Trader is updated on Server side.
   * @implements IProtoOATraderUpdatedEvent
   * @constructor
   * @param {IProtoOATraderUpdatedEvent=} [properties] Properties to set
   */
  function ProtoOATraderUpdatedEvent(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATraderUpdatedEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOATraderUpdatedEvent
   * @instance
   */
  ProtoOATraderUpdatedEvent.prototype.payloadType = 2123;

  /**
   * ProtoOATraderUpdatedEvent ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOATraderUpdatedEvent
   * @instance
   */
  ProtoOATraderUpdatedEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATraderUpdatedEvent trader.
   * @member {IProtoOATrader} trader
   * @memberof ProtoOATraderUpdatedEvent
   * @instance
   */
  ProtoOATraderUpdatedEvent.prototype.trader = null;

  /**
   * Creates a new ProtoOATraderUpdatedEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOATraderUpdatedEvent
   * @static
   * @param {IProtoOATraderUpdatedEvent=} [properties] Properties to set
   * @returns {ProtoOATraderUpdatedEvent} ProtoOATraderUpdatedEvent instance
   */
  ProtoOATraderUpdatedEvent.create = function create(properties) {
    return new ProtoOATraderUpdatedEvent(properties);
  };

  /**
   * Encodes the specified ProtoOATraderUpdatedEvent message. Does not implicitly {@link ProtoOATraderUpdatedEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATraderUpdatedEvent
   * @static
   * @param {IProtoOATraderUpdatedEvent} message ProtoOATraderUpdatedEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATraderUpdatedEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    $root.ProtoOATrader.encode(
      message.trader,
      writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
    ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOATraderUpdatedEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATraderUpdatedEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATraderUpdatedEvent} ProtoOATraderUpdatedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATraderUpdatedEvent.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATraderUpdatedEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.trader = $root.ProtoOATrader.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("trader"))
      throw $util.ProtocolError("missing required 'trader'", {
        instance: message
      });
    return message;
  };

  return ProtoOATraderUpdatedEvent;
})();

$root.ProtoOAReconcileReq = (function() {
  /**
   * Properties of a ProtoOAReconcileReq.
   * @exports IProtoOAReconcileReq
   * @interface IProtoOAReconcileReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAReconcileReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAReconcileReq ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAReconcileReq.
   * @exports ProtoOAReconcileReq
   * @classdesc Request for getting Trader's current open positions and pending orders data.
   * @implements IProtoOAReconcileReq
   * @constructor
   * @param {IProtoOAReconcileReq=} [properties] Properties to set
   */
  function ProtoOAReconcileReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAReconcileReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAReconcileReq
   * @instance
   */
  ProtoOAReconcileReq.prototype.payloadType = 2124;

  /**
   * ProtoOAReconcileReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAReconcileReq
   * @instance
   */
  ProtoOAReconcileReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAReconcileReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAReconcileReq
   * @static
   * @param {IProtoOAReconcileReq=} [properties] Properties to set
   * @returns {ProtoOAReconcileReq} ProtoOAReconcileReq instance
   */
  ProtoOAReconcileReq.create = function create(properties) {
    return new ProtoOAReconcileReq(properties);
  };

  /**
   * Encodes the specified ProtoOAReconcileReq message. Does not implicitly {@link ProtoOAReconcileReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAReconcileReq
   * @static
   * @param {IProtoOAReconcileReq} message ProtoOAReconcileReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAReconcileReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAReconcileReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAReconcileReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAReconcileReq} ProtoOAReconcileReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAReconcileReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAReconcileReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAReconcileReq;
})();

$root.ProtoOAReconcileRes = (function() {
  /**
   * Properties of a ProtoOAReconcileRes.
   * @exports IProtoOAReconcileRes
   * @interface IProtoOAReconcileRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAReconcileRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOAReconcileRes ctidTraderAccountId
   * @property {Array.<IProtoOAPosition>|null} [position] ProtoOAReconcileRes position
   * @property {Array.<IProtoOAOrder>|null} [order] ProtoOAReconcileRes order
   */

  /**
   * Constructs a new ProtoOAReconcileRes.
   * @exports ProtoOAReconcileRes
   * @classdesc The response to the ProtoOAReconcileReq request.
   * @implements IProtoOAReconcileRes
   * @constructor
   * @param {IProtoOAReconcileRes=} [properties] Properties to set
   */
  function ProtoOAReconcileRes(properties) {
    this.position = [];
    this.order = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAReconcileRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAReconcileRes
   * @instance
   */
  ProtoOAReconcileRes.prototype.payloadType = 2125;

  /**
   * ProtoOAReconcileRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAReconcileRes
   * @instance
   */
  ProtoOAReconcileRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAReconcileRes position.
   * @member {Array.<IProtoOAPosition>} position
   * @memberof ProtoOAReconcileRes
   * @instance
   */
  ProtoOAReconcileRes.prototype.position = $util.emptyArray;

  /**
   * ProtoOAReconcileRes order.
   * @member {Array.<IProtoOAOrder>} order
   * @memberof ProtoOAReconcileRes
   * @instance
   */
  ProtoOAReconcileRes.prototype.order = $util.emptyArray;

  /**
   * Creates a new ProtoOAReconcileRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAReconcileRes
   * @static
   * @param {IProtoOAReconcileRes=} [properties] Properties to set
   * @returns {ProtoOAReconcileRes} ProtoOAReconcileRes instance
   */
  ProtoOAReconcileRes.create = function create(properties) {
    return new ProtoOAReconcileRes(properties);
  };

  /**
   * Encodes the specified ProtoOAReconcileRes message. Does not implicitly {@link ProtoOAReconcileRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAReconcileRes
   * @static
   * @param {IProtoOAReconcileRes} message ProtoOAReconcileRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAReconcileRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.position != null && message.position.length)
      for (var i = 0; i < message.position.length; ++i)
        $root.ProtoOAPosition.encode(
          message.position[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    if (message.order != null && message.order.length)
      for (var i = 0; i < message.order.length; ++i)
        $root.ProtoOAOrder.encode(
          message.order[i],
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOAReconcileRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAReconcileRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAReconcileRes} ProtoOAReconcileRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAReconcileRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAReconcileRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.position && message.position.length))
            message.position = [];
          message.position.push(
            $root.ProtoOAPosition.decode(reader, reader.uint32())
          );
          break;
        case 4:
          if (!(message.order && message.order.length)) message.order = [];
          message.order.push(
            $root.ProtoOAOrder.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAReconcileRes;
})();

$root.ProtoOAOrderErrorEvent = (function() {
  /**
   * Properties of a ProtoOAOrderErrorEvent.
   * @exports IProtoOAOrderErrorEvent
   * @interface IProtoOAOrderErrorEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAOrderErrorEvent payloadType
   * @property {Long} ctidTraderAccountId ProtoOAOrderErrorEvent ctidTraderAccountId
   * @property {string} errorCode ProtoOAOrderErrorEvent errorCode
   * @property {Long|null} [orderId] ProtoOAOrderErrorEvent orderId
   * @property {Long|null} [positionId] ProtoOAOrderErrorEvent positionId
   * @property {string|null} [description] ProtoOAOrderErrorEvent description
   */

  /**
   * Constructs a new ProtoOAOrderErrorEvent.
   * @exports ProtoOAOrderErrorEvent
   * @classdesc Event that is sent when errors occur during the order requests.
   * @implements IProtoOAOrderErrorEvent
   * @constructor
   * @param {IProtoOAOrderErrorEvent=} [properties] Properties to set
   */
  function ProtoOAOrderErrorEvent(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAOrderErrorEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAOrderErrorEvent
   * @instance
   */
  ProtoOAOrderErrorEvent.prototype.payloadType = 2132;

  /**
   * ProtoOAOrderErrorEvent ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAOrderErrorEvent
   * @instance
   */
  ProtoOAOrderErrorEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrderErrorEvent errorCode.
   * @member {string} errorCode
   * @memberof ProtoOAOrderErrorEvent
   * @instance
   */
  ProtoOAOrderErrorEvent.prototype.errorCode = "";

  /**
   * ProtoOAOrderErrorEvent orderId.
   * @member {Long} orderId
   * @memberof ProtoOAOrderErrorEvent
   * @instance
   */
  ProtoOAOrderErrorEvent.prototype.orderId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrderErrorEvent positionId.
   * @member {Long} positionId
   * @memberof ProtoOAOrderErrorEvent
   * @instance
   */
  ProtoOAOrderErrorEvent.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrderErrorEvent description.
   * @member {string} description
   * @memberof ProtoOAOrderErrorEvent
   * @instance
   */
  ProtoOAOrderErrorEvent.prototype.description = "";

  /**
   * Creates a new ProtoOAOrderErrorEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOAOrderErrorEvent
   * @static
   * @param {IProtoOAOrderErrorEvent=} [properties] Properties to set
   * @returns {ProtoOAOrderErrorEvent} ProtoOAOrderErrorEvent instance
   */
  ProtoOAOrderErrorEvent.create = function create(properties) {
    return new ProtoOAOrderErrorEvent(properties);
  };

  /**
   * Encodes the specified ProtoOAOrderErrorEvent message. Does not implicitly {@link ProtoOAOrderErrorEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAOrderErrorEvent
   * @static
   * @param {IProtoOAOrderErrorEvent} message ProtoOAOrderErrorEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAOrderErrorEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.errorCode);
    if (message.orderId != null && message.hasOwnProperty("orderId"))
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.orderId);
    writer
      .uint32(/* id 5, wireType 0 =*/ 40)
      .int64(message.ctidTraderAccountId);
    if (message.positionId != null && message.hasOwnProperty("positionId"))
      writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.positionId);
    if (message.description != null && message.hasOwnProperty("description"))
      writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.description);
    return writer;
  };

  /**
   * Decodes a ProtoOAOrderErrorEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAOrderErrorEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAOrderErrorEvent} ProtoOAOrderErrorEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAOrderErrorEvent.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAOrderErrorEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 5:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 2:
          message.errorCode = reader.string();
          break;
        case 3:
          message.orderId = reader.int64();
          break;
        case 6:
          message.positionId = reader.int64();
          break;
        case 7:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("errorCode"))
      throw $util.ProtocolError("missing required 'errorCode'", {
        instance: message
      });
    return message;
  };

  return ProtoOAOrderErrorEvent;
})();

$root.ProtoOADealListReq = (function() {
  /**
   * Properties of a ProtoOADealListReq.
   * @exports IProtoOADealListReq
   * @interface IProtoOADealListReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOADealListReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOADealListReq ctidTraderAccountId
   * @property {Long} fromTimestamp ProtoOADealListReq fromTimestamp
   * @property {Long} toTimestamp ProtoOADealListReq toTimestamp
   * @property {number|null} [maxRows] ProtoOADealListReq maxRows
   */

  /**
   * Constructs a new ProtoOADealListReq.
   * @exports ProtoOADealListReq
   * @classdesc Request for getting Trader's deals historical data (execution details).
   * @implements IProtoOADealListReq
   * @constructor
   * @param {IProtoOADealListReq=} [properties] Properties to set
   */
  function ProtoOADealListReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADealListReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOADealListReq
   * @instance
   */
  ProtoOADealListReq.prototype.payloadType = 2133;

  /**
   * ProtoOADealListReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOADealListReq
   * @instance
   */
  ProtoOADealListReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADealListReq fromTimestamp.
   * @member {Long} fromTimestamp
   * @memberof ProtoOADealListReq
   * @instance
   */
  ProtoOADealListReq.prototype.fromTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADealListReq toTimestamp.
   * @member {Long} toTimestamp
   * @memberof ProtoOADealListReq
   * @instance
   */
  ProtoOADealListReq.prototype.toTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADealListReq maxRows.
   * @member {number} maxRows
   * @memberof ProtoOADealListReq
   * @instance
   */
  ProtoOADealListReq.prototype.maxRows = 0;

  /**
   * Creates a new ProtoOADealListReq instance using the specified properties.
   * @function create
   * @memberof ProtoOADealListReq
   * @static
   * @param {IProtoOADealListReq=} [properties] Properties to set
   * @returns {ProtoOADealListReq} ProtoOADealListReq instance
   */
  ProtoOADealListReq.create = function create(properties) {
    return new ProtoOADealListReq(properties);
  };

  /**
   * Encodes the specified ProtoOADealListReq message. Does not implicitly {@link ProtoOADealListReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADealListReq
   * @static
   * @param {IProtoOADealListReq} message ProtoOADealListReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADealListReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.fromTimestamp);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.toTimestamp);
    if (message.maxRows != null && message.hasOwnProperty("maxRows"))
      writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.maxRows);
    return writer;
  };

  /**
   * Decodes a ProtoOADealListReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADealListReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADealListReq} ProtoOADealListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADealListReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADealListReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.fromTimestamp = reader.int64();
          break;
        case 4:
          message.toTimestamp = reader.int64();
          break;
        case 5:
          message.maxRows = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("fromTimestamp"))
      throw $util.ProtocolError("missing required 'fromTimestamp'", {
        instance: message
      });
    if (!message.hasOwnProperty("toTimestamp"))
      throw $util.ProtocolError("missing required 'toTimestamp'", {
        instance: message
      });
    return message;
  };

  return ProtoOADealListReq;
})();

$root.ProtoOADealListRes = (function() {
  /**
   * Properties of a ProtoOADealListRes.
   * @exports IProtoOADealListRes
   * @interface IProtoOADealListRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOADealListRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOADealListRes ctidTraderAccountId
   * @property {Array.<IProtoOADeal>|null} [deal] ProtoOADealListRes deal
   * @property {boolean} hasMore ProtoOADealListRes hasMore
   */

  /**
   * Constructs a new ProtoOADealListRes.
   * @exports ProtoOADealListRes
   * @classdesc The response to the ProtoOADealListRes request.
   * @implements IProtoOADealListRes
   * @constructor
   * @param {IProtoOADealListRes=} [properties] Properties to set
   */
  function ProtoOADealListRes(properties) {
    this.deal = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADealListRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOADealListRes
   * @instance
   */
  ProtoOADealListRes.prototype.payloadType = 2134;

  /**
   * ProtoOADealListRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOADealListRes
   * @instance
   */
  ProtoOADealListRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADealListRes deal.
   * @member {Array.<IProtoOADeal>} deal
   * @memberof ProtoOADealListRes
   * @instance
   */
  ProtoOADealListRes.prototype.deal = $util.emptyArray;

  /**
   * ProtoOADealListRes hasMore.
   * @member {boolean} hasMore
   * @memberof ProtoOADealListRes
   * @instance
   */
  ProtoOADealListRes.prototype.hasMore = false;

  /**
   * Creates a new ProtoOADealListRes instance using the specified properties.
   * @function create
   * @memberof ProtoOADealListRes
   * @static
   * @param {IProtoOADealListRes=} [properties] Properties to set
   * @returns {ProtoOADealListRes} ProtoOADealListRes instance
   */
  ProtoOADealListRes.create = function create(properties) {
    return new ProtoOADealListRes(properties);
  };

  /**
   * Encodes the specified ProtoOADealListRes message. Does not implicitly {@link ProtoOADealListRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADealListRes
   * @static
   * @param {IProtoOADealListRes} message ProtoOADealListRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADealListRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.deal != null && message.deal.length)
      for (var i = 0; i < message.deal.length; ++i)
        $root.ProtoOADeal.encode(
          message.deal[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.hasMore);
    return writer;
  };

  /**
   * Decodes a ProtoOADealListRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADealListRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADealListRes} ProtoOADealListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADealListRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADealListRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.deal && message.deal.length)) message.deal = [];
          message.deal.push($root.ProtoOADeal.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hasMore = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("hasMore"))
      throw $util.ProtocolError("missing required 'hasMore'", {
        instance: message
      });
    return message;
  };

  return ProtoOADealListRes;
})();

$root.ProtoOAExpectedMarginReq = (function() {
  /**
   * Properties of a ProtoOAExpectedMarginReq.
   * @exports IProtoOAExpectedMarginReq
   * @interface IProtoOAExpectedMarginReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAExpectedMarginReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAExpectedMarginReq ctidTraderAccountId
   * @property {Long} symbolId ProtoOAExpectedMarginReq symbolId
   * @property {Array.<Long>|null} [volume] ProtoOAExpectedMarginReq volume
   */

  /**
   * Constructs a new ProtoOAExpectedMarginReq.
   * @exports ProtoOAExpectedMarginReq
   * @classdesc Request for getting the margin estimate. Can be used before sending a new order request.
   * @implements IProtoOAExpectedMarginReq
   * @constructor
   * @param {IProtoOAExpectedMarginReq=} [properties] Properties to set
   */
  function ProtoOAExpectedMarginReq(properties) {
    this.volume = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAExpectedMarginReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAExpectedMarginReq
   * @instance
   */
  ProtoOAExpectedMarginReq.prototype.payloadType = 2139;

  /**
   * ProtoOAExpectedMarginReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAExpectedMarginReq
   * @instance
   */
  ProtoOAExpectedMarginReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAExpectedMarginReq symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOAExpectedMarginReq
   * @instance
   */
  ProtoOAExpectedMarginReq.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAExpectedMarginReq volume.
   * @member {Array.<Long>} volume
   * @memberof ProtoOAExpectedMarginReq
   * @instance
   */
  ProtoOAExpectedMarginReq.prototype.volume = $util.emptyArray;

  /**
   * Creates a new ProtoOAExpectedMarginReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAExpectedMarginReq
   * @static
   * @param {IProtoOAExpectedMarginReq=} [properties] Properties to set
   * @returns {ProtoOAExpectedMarginReq} ProtoOAExpectedMarginReq instance
   */
  ProtoOAExpectedMarginReq.create = function create(properties) {
    return new ProtoOAExpectedMarginReq(properties);
  };

  /**
   * Encodes the specified ProtoOAExpectedMarginReq message. Does not implicitly {@link ProtoOAExpectedMarginReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAExpectedMarginReq
   * @static
   * @param {IProtoOAExpectedMarginReq} message ProtoOAExpectedMarginReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAExpectedMarginReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId);
    if (message.volume != null && message.volume.length)
      for (var i = 0; i < message.volume.length; ++i)
        writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.volume[i]);
    return writer;
  };

  /**
   * Decodes a ProtoOAExpectedMarginReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAExpectedMarginReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAExpectedMarginReq} ProtoOAExpectedMarginReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAExpectedMarginReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAExpectedMarginReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.symbolId = reader.int64();
          break;
        case 4:
          if (!(message.volume && message.volume.length)) message.volume = [];
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) message.volume.push(reader.int64());
          } else message.volume.push(reader.int64());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAExpectedMarginReq;
})();

$root.ProtoOAExpectedMarginRes = (function() {
  /**
   * Properties of a ProtoOAExpectedMarginRes.
   * @exports IProtoOAExpectedMarginRes
   * @interface IProtoOAExpectedMarginRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAExpectedMarginRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOAExpectedMarginRes ctidTraderAccountId
   * @property {Array.<IProtoOAExpectedMargin>|null} [margin] ProtoOAExpectedMarginRes margin
   */

  /**
   * Constructs a new ProtoOAExpectedMarginRes.
   * @exports ProtoOAExpectedMarginRes
   * @classdesc The response to the ProtoOAExpectedMarginReq request.
   * @implements IProtoOAExpectedMarginRes
   * @constructor
   * @param {IProtoOAExpectedMarginRes=} [properties] Properties to set
   */
  function ProtoOAExpectedMarginRes(properties) {
    this.margin = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAExpectedMarginRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAExpectedMarginRes
   * @instance
   */
  ProtoOAExpectedMarginRes.prototype.payloadType = 2140;

  /**
   * ProtoOAExpectedMarginRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAExpectedMarginRes
   * @instance
   */
  ProtoOAExpectedMarginRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAExpectedMarginRes margin.
   * @member {Array.<IProtoOAExpectedMargin>} margin
   * @memberof ProtoOAExpectedMarginRes
   * @instance
   */
  ProtoOAExpectedMarginRes.prototype.margin = $util.emptyArray;

  /**
   * Creates a new ProtoOAExpectedMarginRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAExpectedMarginRes
   * @static
   * @param {IProtoOAExpectedMarginRes=} [properties] Properties to set
   * @returns {ProtoOAExpectedMarginRes} ProtoOAExpectedMarginRes instance
   */
  ProtoOAExpectedMarginRes.create = function create(properties) {
    return new ProtoOAExpectedMarginRes(properties);
  };

  /**
   * Encodes the specified ProtoOAExpectedMarginRes message. Does not implicitly {@link ProtoOAExpectedMarginRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAExpectedMarginRes
   * @static
   * @param {IProtoOAExpectedMarginRes} message ProtoOAExpectedMarginRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAExpectedMarginRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.margin != null && message.margin.length)
      for (var i = 0; i < message.margin.length; ++i)
        $root.ProtoOAExpectedMargin.encode(
          message.margin[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOAExpectedMarginRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAExpectedMarginRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAExpectedMarginRes} ProtoOAExpectedMarginRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAExpectedMarginRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAExpectedMarginRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.margin && message.margin.length)) message.margin = [];
          message.margin.push(
            $root.ProtoOAExpectedMargin.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAExpectedMarginRes;
})();

$root.ProtoOAMarginChangedEvent = (function() {
  /**
   * Properties of a ProtoOAMarginChangedEvent.
   * @exports IProtoOAMarginChangedEvent
   * @interface IProtoOAMarginChangedEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAMarginChangedEvent payloadType
   * @property {Long} ctidTraderAccountId ProtoOAMarginChangedEvent ctidTraderAccountId
   * @property {Long} positionId ProtoOAMarginChangedEvent positionId
   * @property {Long} usedMargin ProtoOAMarginChangedEvent usedMargin
   */

  /**
   * Constructs a new ProtoOAMarginChangedEvent.
   * @exports ProtoOAMarginChangedEvent
   * @classdesc Event that is sent when the margin allocated to a specific position is changed.
   * @implements IProtoOAMarginChangedEvent
   * @constructor
   * @param {IProtoOAMarginChangedEvent=} [properties] Properties to set
   */
  function ProtoOAMarginChangedEvent(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAMarginChangedEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAMarginChangedEvent
   * @instance
   */
  ProtoOAMarginChangedEvent.prototype.payloadType = 2141;

  /**
   * ProtoOAMarginChangedEvent ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAMarginChangedEvent
   * @instance
   */
  ProtoOAMarginChangedEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAMarginChangedEvent positionId.
   * @member {Long} positionId
   * @memberof ProtoOAMarginChangedEvent
   * @instance
   */
  ProtoOAMarginChangedEvent.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOAMarginChangedEvent usedMargin.
   * @member {Long} usedMargin
   * @memberof ProtoOAMarginChangedEvent
   * @instance
   */
  ProtoOAMarginChangedEvent.prototype.usedMargin = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * Creates a new ProtoOAMarginChangedEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOAMarginChangedEvent
   * @static
   * @param {IProtoOAMarginChangedEvent=} [properties] Properties to set
   * @returns {ProtoOAMarginChangedEvent} ProtoOAMarginChangedEvent instance
   */
  ProtoOAMarginChangedEvent.create = function create(properties) {
    return new ProtoOAMarginChangedEvent(properties);
  };

  /**
   * Encodes the specified ProtoOAMarginChangedEvent message. Does not implicitly {@link ProtoOAMarginChangedEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAMarginChangedEvent
   * @static
   * @param {IProtoOAMarginChangedEvent} message ProtoOAMarginChangedEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAMarginChangedEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.positionId);
    writer.uint32(/* id 4, wireType 0 =*/ 32).uint64(message.usedMargin);
    return writer;
  };

  /**
   * Decodes a ProtoOAMarginChangedEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAMarginChangedEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAMarginChangedEvent} ProtoOAMarginChangedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAMarginChangedEvent.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAMarginChangedEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.positionId = reader.uint64();
          break;
        case 4:
          message.usedMargin = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("positionId"))
      throw $util.ProtocolError("missing required 'positionId'", {
        instance: message
      });
    if (!message.hasOwnProperty("usedMargin"))
      throw $util.ProtocolError("missing required 'usedMargin'", {
        instance: message
      });
    return message;
  };

  return ProtoOAMarginChangedEvent;
})();

$root.ProtoOACashFlowHistoryListReq = (function() {
  /**
   * Properties of a ProtoOACashFlowHistoryListReq.
   * @exports IProtoOACashFlowHistoryListReq
   * @interface IProtoOACashFlowHistoryListReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOACashFlowHistoryListReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOACashFlowHistoryListReq ctidTraderAccountId
   * @property {Long} fromTimestamp ProtoOACashFlowHistoryListReq fromTimestamp
   * @property {Long} toTimestamp ProtoOACashFlowHistoryListReq toTimestamp
   */

  /**
   * Constructs a new ProtoOACashFlowHistoryListReq.
   * @exports ProtoOACashFlowHistoryListReq
   * @classdesc Request for getting Trader's historical data of deposits and withdrawals.
   * @implements IProtoOACashFlowHistoryListReq
   * @constructor
   * @param {IProtoOACashFlowHistoryListReq=} [properties] Properties to set
   */
  function ProtoOACashFlowHistoryListReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOACashFlowHistoryListReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOACashFlowHistoryListReq
   * @instance
   */
  ProtoOACashFlowHistoryListReq.prototype.payloadType = 2143;

  /**
   * ProtoOACashFlowHistoryListReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOACashFlowHistoryListReq
   * @instance
   */
  ProtoOACashFlowHistoryListReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOACashFlowHistoryListReq fromTimestamp.
   * @member {Long} fromTimestamp
   * @memberof ProtoOACashFlowHistoryListReq
   * @instance
   */
  ProtoOACashFlowHistoryListReq.prototype.fromTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOACashFlowHistoryListReq toTimestamp.
   * @member {Long} toTimestamp
   * @memberof ProtoOACashFlowHistoryListReq
   * @instance
   */
  ProtoOACashFlowHistoryListReq.prototype.toTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOACashFlowHistoryListReq instance using the specified properties.
   * @function create
   * @memberof ProtoOACashFlowHistoryListReq
   * @static
   * @param {IProtoOACashFlowHistoryListReq=} [properties] Properties to set
   * @returns {ProtoOACashFlowHistoryListReq} ProtoOACashFlowHistoryListReq instance
   */
  ProtoOACashFlowHistoryListReq.create = function create(properties) {
    return new ProtoOACashFlowHistoryListReq(properties);
  };

  /**
   * Encodes the specified ProtoOACashFlowHistoryListReq message. Does not implicitly {@link ProtoOACashFlowHistoryListReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOACashFlowHistoryListReq
   * @static
   * @param {IProtoOACashFlowHistoryListReq} message ProtoOACashFlowHistoryListReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOACashFlowHistoryListReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.fromTimestamp);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.toTimestamp);
    return writer;
  };

  /**
   * Decodes a ProtoOACashFlowHistoryListReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOACashFlowHistoryListReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOACashFlowHistoryListReq} ProtoOACashFlowHistoryListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOACashFlowHistoryListReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOACashFlowHistoryListReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.fromTimestamp = reader.int64();
          break;
        case 4:
          message.toTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("fromTimestamp"))
      throw $util.ProtocolError("missing required 'fromTimestamp'", {
        instance: message
      });
    if (!message.hasOwnProperty("toTimestamp"))
      throw $util.ProtocolError("missing required 'toTimestamp'", {
        instance: message
      });
    return message;
  };

  return ProtoOACashFlowHistoryListReq;
})();

$root.ProtoOACashFlowHistoryListRes = (function() {
  /**
   * Properties of a ProtoOACashFlowHistoryListRes.
   * @exports IProtoOACashFlowHistoryListRes
   * @interface IProtoOACashFlowHistoryListRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOACashFlowHistoryListRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOACashFlowHistoryListRes ctidTraderAccountId
   * @property {Array.<IProtoOADepositWithdraw>|null} [depositWithdraw] ProtoOACashFlowHistoryListRes depositWithdraw
   */

  /**
   * Constructs a new ProtoOACashFlowHistoryListRes.
   * @exports ProtoOACashFlowHistoryListRes
   * @classdesc Response to the ProtoOACashFlowHistoryListReq request.
   * @implements IProtoOACashFlowHistoryListRes
   * @constructor
   * @param {IProtoOACashFlowHistoryListRes=} [properties] Properties to set
   */
  function ProtoOACashFlowHistoryListRes(properties) {
    this.depositWithdraw = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOACashFlowHistoryListRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOACashFlowHistoryListRes
   * @instance
   */
  ProtoOACashFlowHistoryListRes.prototype.payloadType = 2144;

  /**
   * ProtoOACashFlowHistoryListRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOACashFlowHistoryListRes
   * @instance
   */
  ProtoOACashFlowHistoryListRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOACashFlowHistoryListRes depositWithdraw.
   * @member {Array.<IProtoOADepositWithdraw>} depositWithdraw
   * @memberof ProtoOACashFlowHistoryListRes
   * @instance
   */
  ProtoOACashFlowHistoryListRes.prototype.depositWithdraw = $util.emptyArray;

  /**
   * Creates a new ProtoOACashFlowHistoryListRes instance using the specified properties.
   * @function create
   * @memberof ProtoOACashFlowHistoryListRes
   * @static
   * @param {IProtoOACashFlowHistoryListRes=} [properties] Properties to set
   * @returns {ProtoOACashFlowHistoryListRes} ProtoOACashFlowHistoryListRes instance
   */
  ProtoOACashFlowHistoryListRes.create = function create(properties) {
    return new ProtoOACashFlowHistoryListRes(properties);
  };

  /**
   * Encodes the specified ProtoOACashFlowHistoryListRes message. Does not implicitly {@link ProtoOACashFlowHistoryListRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOACashFlowHistoryListRes
   * @static
   * @param {IProtoOACashFlowHistoryListRes} message ProtoOACashFlowHistoryListRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOACashFlowHistoryListRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.depositWithdraw != null && message.depositWithdraw.length)
      for (var i = 0; i < message.depositWithdraw.length; ++i)
        $root.ProtoOADepositWithdraw.encode(
          message.depositWithdraw[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOACashFlowHistoryListRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOACashFlowHistoryListRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOACashFlowHistoryListRes} ProtoOACashFlowHistoryListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOACashFlowHistoryListRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOACashFlowHistoryListRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.depositWithdraw && message.depositWithdraw.length))
            message.depositWithdraw = [];
          message.depositWithdraw.push(
            $root.ProtoOADepositWithdraw.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOACashFlowHistoryListRes;
})();

$root.ProtoOAGetAccountListByAccessTokenReq = (function() {
  /**
   * Properties of a ProtoOAGetAccountListByAccessTokenReq.
   * @exports IProtoOAGetAccountListByAccessTokenReq
   * @interface IProtoOAGetAccountListByAccessTokenReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetAccountListByAccessTokenReq payloadType
   * @property {string} accessToken ProtoOAGetAccountListByAccessTokenReq accessToken
   */

  /**
   * Constructs a new ProtoOAGetAccountListByAccessTokenReq.
   * @exports ProtoOAGetAccountListByAccessTokenReq
   * @classdesc Request for getting the list of granted trader's account for the access token.
   * @implements IProtoOAGetAccountListByAccessTokenReq
   * @constructor
   * @param {IProtoOAGetAccountListByAccessTokenReq=} [properties] Properties to set
   */
  function ProtoOAGetAccountListByAccessTokenReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAGetAccountListByAccessTokenReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAGetAccountListByAccessTokenReq
   * @instance
   */
  ProtoOAGetAccountListByAccessTokenReq.prototype.payloadType = 2149;

  /**
   * ProtoOAGetAccountListByAccessTokenReq accessToken.
   * @member {string} accessToken
   * @memberof ProtoOAGetAccountListByAccessTokenReq
   * @instance
   */
  ProtoOAGetAccountListByAccessTokenReq.prototype.accessToken = "";

  /**
   * Creates a new ProtoOAGetAccountListByAccessTokenReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAGetAccountListByAccessTokenReq
   * @static
   * @param {IProtoOAGetAccountListByAccessTokenReq=} [properties] Properties to set
   * @returns {ProtoOAGetAccountListByAccessTokenReq} ProtoOAGetAccountListByAccessTokenReq instance
   */
  ProtoOAGetAccountListByAccessTokenReq.create = function create(properties) {
    return new ProtoOAGetAccountListByAccessTokenReq(properties);
  };

  /**
   * Encodes the specified ProtoOAGetAccountListByAccessTokenReq message. Does not implicitly {@link ProtoOAGetAccountListByAccessTokenReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAGetAccountListByAccessTokenReq
   * @static
   * @param {IProtoOAGetAccountListByAccessTokenReq} message ProtoOAGetAccountListByAccessTokenReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAGetAccountListByAccessTokenReq.encode = function encode(
    message,
    writer
  ) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.accessToken);
    return writer;
  };

  /**
   * Decodes a ProtoOAGetAccountListByAccessTokenReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAGetAccountListByAccessTokenReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAGetAccountListByAccessTokenReq} ProtoOAGetAccountListByAccessTokenReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAGetAccountListByAccessTokenReq.decode = function decode(
    reader,
    length
  ) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAGetAccountListByAccessTokenReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("accessToken"))
      throw $util.ProtocolError("missing required 'accessToken'", {
        instance: message
      });
    return message;
  };

  return ProtoOAGetAccountListByAccessTokenReq;
})();

$root.ProtoOAGetAccountListByAccessTokenRes = (function() {
  /**
   * Properties of a ProtoOAGetAccountListByAccessTokenRes.
   * @exports IProtoOAGetAccountListByAccessTokenRes
   * @interface IProtoOAGetAccountListByAccessTokenRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetAccountListByAccessTokenRes payloadType
   * @property {string} accessToken ProtoOAGetAccountListByAccessTokenRes accessToken
   * @property {ProtoOAClientPermissionScope|null} [permissionScope] ProtoOAGetAccountListByAccessTokenRes permissionScope
   * @property {Array.<IProtoOACtidTraderAccount>|null} [ctidTraderAccount] ProtoOAGetAccountListByAccessTokenRes ctidTraderAccount
   */

  /**
   * Constructs a new ProtoOAGetAccountListByAccessTokenRes.
   * @exports ProtoOAGetAccountListByAccessTokenRes
   * @classdesc Response to the ProtoOAGetAccountListByAccessTokenReq request.
   * @implements IProtoOAGetAccountListByAccessTokenRes
   * @constructor
   * @param {IProtoOAGetAccountListByAccessTokenRes=} [properties] Properties to set
   */
  function ProtoOAGetAccountListByAccessTokenRes(properties) {
    this.ctidTraderAccount = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAGetAccountListByAccessTokenRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAGetAccountListByAccessTokenRes
   * @instance
   */
  ProtoOAGetAccountListByAccessTokenRes.prototype.payloadType = 2150;

  /**
   * ProtoOAGetAccountListByAccessTokenRes accessToken.
   * @member {string} accessToken
   * @memberof ProtoOAGetAccountListByAccessTokenRes
   * @instance
   */
  ProtoOAGetAccountListByAccessTokenRes.prototype.accessToken = "";

  /**
   * ProtoOAGetAccountListByAccessTokenRes permissionScope.
   * @member {ProtoOAClientPermissionScope} permissionScope
   * @memberof ProtoOAGetAccountListByAccessTokenRes
   * @instance
   */
  ProtoOAGetAccountListByAccessTokenRes.prototype.permissionScope = 0;

  /**
   * ProtoOAGetAccountListByAccessTokenRes ctidTraderAccount.
   * @member {Array.<IProtoOACtidTraderAccount>} ctidTraderAccount
   * @memberof ProtoOAGetAccountListByAccessTokenRes
   * @instance
   */
  ProtoOAGetAccountListByAccessTokenRes.prototype.ctidTraderAccount =
    $util.emptyArray;

  /**
   * Creates a new ProtoOAGetAccountListByAccessTokenRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAGetAccountListByAccessTokenRes
   * @static
   * @param {IProtoOAGetAccountListByAccessTokenRes=} [properties] Properties to set
   * @returns {ProtoOAGetAccountListByAccessTokenRes} ProtoOAGetAccountListByAccessTokenRes instance
   */
  ProtoOAGetAccountListByAccessTokenRes.create = function create(properties) {
    return new ProtoOAGetAccountListByAccessTokenRes(properties);
  };

  /**
   * Encodes the specified ProtoOAGetAccountListByAccessTokenRes message. Does not implicitly {@link ProtoOAGetAccountListByAccessTokenRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAGetAccountListByAccessTokenRes
   * @static
   * @param {IProtoOAGetAccountListByAccessTokenRes} message ProtoOAGetAccountListByAccessTokenRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAGetAccountListByAccessTokenRes.encode = function encode(
    message,
    writer
  ) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.accessToken);
    if (
      message.permissionScope != null &&
      message.hasOwnProperty("permissionScope")
    )
      writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.permissionScope);
    if (message.ctidTraderAccount != null && message.ctidTraderAccount.length)
      for (var i = 0; i < message.ctidTraderAccount.length; ++i)
        $root.ProtoOACtidTraderAccount.encode(
          message.ctidTraderAccount[i],
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOAGetAccountListByAccessTokenRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAGetAccountListByAccessTokenRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAGetAccountListByAccessTokenRes} ProtoOAGetAccountListByAccessTokenRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAGetAccountListByAccessTokenRes.decode = function decode(
    reader,
    length
  ) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAGetAccountListByAccessTokenRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.accessToken = reader.string();
          break;
        case 3:
          message.permissionScope = reader.int32();
          break;
        case 4:
          if (!(message.ctidTraderAccount && message.ctidTraderAccount.length))
            message.ctidTraderAccount = [];
          message.ctidTraderAccount.push(
            $root.ProtoOACtidTraderAccount.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("accessToken"))
      throw $util.ProtocolError("missing required 'accessToken'", {
        instance: message
      });
    return message;
  };

  return ProtoOAGetAccountListByAccessTokenRes;
})();

$root.ProtoOASubscribeSpotsReq = (function() {
  /**
   * Properties of a ProtoOASubscribeSpotsReq.
   * @exports IProtoOASubscribeSpotsReq
   * @interface IProtoOASubscribeSpotsReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASubscribeSpotsReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOASubscribeSpotsReq ctidTraderAccountId
   * @property {Array.<Long>|null} [symbolId] ProtoOASubscribeSpotsReq symbolId
   */

  /**
   * Constructs a new ProtoOASubscribeSpotsReq.
   * @exports ProtoOASubscribeSpotsReq
   * @classdesc Request for subscribing on spot events of the specified symbol.
   * @implements IProtoOASubscribeSpotsReq
   * @constructor
   * @param {IProtoOASubscribeSpotsReq=} [properties] Properties to set
   */
  function ProtoOASubscribeSpotsReq(properties) {
    this.symbolId = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASubscribeSpotsReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASubscribeSpotsReq
   * @instance
   */
  ProtoOASubscribeSpotsReq.prototype.payloadType = 2127;

  /**
   * ProtoOASubscribeSpotsReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASubscribeSpotsReq
   * @instance
   */
  ProtoOASubscribeSpotsReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASubscribeSpotsReq symbolId.
   * @member {Array.<Long>} symbolId
   * @memberof ProtoOASubscribeSpotsReq
   * @instance
   */
  ProtoOASubscribeSpotsReq.prototype.symbolId = $util.emptyArray;

  /**
   * Creates a new ProtoOASubscribeSpotsReq instance using the specified properties.
   * @function create
   * @memberof ProtoOASubscribeSpotsReq
   * @static
   * @param {IProtoOASubscribeSpotsReq=} [properties] Properties to set
   * @returns {ProtoOASubscribeSpotsReq} ProtoOASubscribeSpotsReq instance
   */
  ProtoOASubscribeSpotsReq.create = function create(properties) {
    return new ProtoOASubscribeSpotsReq(properties);
  };

  /**
   * Encodes the specified ProtoOASubscribeSpotsReq message. Does not implicitly {@link ProtoOASubscribeSpotsReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASubscribeSpotsReq
   * @static
   * @param {IProtoOASubscribeSpotsReq} message ProtoOASubscribeSpotsReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASubscribeSpotsReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbolId != null && message.symbolId.length)
      for (var i = 0; i < message.symbolId.length; ++i)
        writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId[i]);
    return writer;
  };

  /**
   * Decodes a ProtoOASubscribeSpotsReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASubscribeSpotsReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASubscribeSpotsReq} ProtoOASubscribeSpotsReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASubscribeSpotsReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASubscribeSpotsReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.symbolId && message.symbolId.length))
            message.symbolId = [];
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) message.symbolId.push(reader.int64());
          } else message.symbolId.push(reader.int64());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASubscribeSpotsReq;
})();

$root.ProtoOASubscribeSpotsRes = (function() {
  /**
   * Properties of a ProtoOASubscribeSpotsRes.
   * @exports IProtoOASubscribeSpotsRes
   * @interface IProtoOASubscribeSpotsRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASubscribeSpotsRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOASubscribeSpotsRes ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOASubscribeSpotsRes.
   * @exports ProtoOASubscribeSpotsRes
   * @classdesc Response to the ProtoOASubscribeSpotsReq request.
   * @implements IProtoOASubscribeSpotsRes
   * @constructor
   * @param {IProtoOASubscribeSpotsRes=} [properties] Properties to set
   */
  function ProtoOASubscribeSpotsRes(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASubscribeSpotsRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASubscribeSpotsRes
   * @instance
   */
  ProtoOASubscribeSpotsRes.prototype.payloadType = 2128;

  /**
   * ProtoOASubscribeSpotsRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASubscribeSpotsRes
   * @instance
   */
  ProtoOASubscribeSpotsRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOASubscribeSpotsRes instance using the specified properties.
   * @function create
   * @memberof ProtoOASubscribeSpotsRes
   * @static
   * @param {IProtoOASubscribeSpotsRes=} [properties] Properties to set
   * @returns {ProtoOASubscribeSpotsRes} ProtoOASubscribeSpotsRes instance
   */
  ProtoOASubscribeSpotsRes.create = function create(properties) {
    return new ProtoOASubscribeSpotsRes(properties);
  };

  /**
   * Encodes the specified ProtoOASubscribeSpotsRes message. Does not implicitly {@link ProtoOASubscribeSpotsRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASubscribeSpotsRes
   * @static
   * @param {IProtoOASubscribeSpotsRes} message ProtoOASubscribeSpotsRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASubscribeSpotsRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOASubscribeSpotsRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASubscribeSpotsRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASubscribeSpotsRes} ProtoOASubscribeSpotsRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASubscribeSpotsRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASubscribeSpotsRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASubscribeSpotsRes;
})();

$root.ProtoOAUnsubscribeSpotsReq = (function() {
  /**
   * Properties of a ProtoOAUnsubscribeSpotsReq.
   * @exports IProtoOAUnsubscribeSpotsReq
   * @interface IProtoOAUnsubscribeSpotsReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAUnsubscribeSpotsReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAUnsubscribeSpotsReq ctidTraderAccountId
   * @property {Array.<Long>|null} [symbolId] ProtoOAUnsubscribeSpotsReq symbolId
   */

  /**
   * Constructs a new ProtoOAUnsubscribeSpotsReq.
   * @exports ProtoOAUnsubscribeSpotsReq
   * @classdesc Request for unsubscribing from the spot events of the specified symbol.
   * @implements IProtoOAUnsubscribeSpotsReq
   * @constructor
   * @param {IProtoOAUnsubscribeSpotsReq=} [properties] Properties to set
   */
  function ProtoOAUnsubscribeSpotsReq(properties) {
    this.symbolId = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAUnsubscribeSpotsReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAUnsubscribeSpotsReq
   * @instance
   */
  ProtoOAUnsubscribeSpotsReq.prototype.payloadType = 2129;

  /**
   * ProtoOAUnsubscribeSpotsReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAUnsubscribeSpotsReq
   * @instance
   */
  ProtoOAUnsubscribeSpotsReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAUnsubscribeSpotsReq symbolId.
   * @member {Array.<Long>} symbolId
   * @memberof ProtoOAUnsubscribeSpotsReq
   * @instance
   */
  ProtoOAUnsubscribeSpotsReq.prototype.symbolId = $util.emptyArray;

  /**
   * Creates a new ProtoOAUnsubscribeSpotsReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAUnsubscribeSpotsReq
   * @static
   * @param {IProtoOAUnsubscribeSpotsReq=} [properties] Properties to set
   * @returns {ProtoOAUnsubscribeSpotsReq} ProtoOAUnsubscribeSpotsReq instance
   */
  ProtoOAUnsubscribeSpotsReq.create = function create(properties) {
    return new ProtoOAUnsubscribeSpotsReq(properties);
  };

  /**
   * Encodes the specified ProtoOAUnsubscribeSpotsReq message. Does not implicitly {@link ProtoOAUnsubscribeSpotsReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAUnsubscribeSpotsReq
   * @static
   * @param {IProtoOAUnsubscribeSpotsReq} message ProtoOAUnsubscribeSpotsReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAUnsubscribeSpotsReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbolId != null && message.symbolId.length)
      for (var i = 0; i < message.symbolId.length; ++i)
        writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId[i]);
    return writer;
  };

  /**
   * Decodes a ProtoOAUnsubscribeSpotsReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAUnsubscribeSpotsReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAUnsubscribeSpotsReq} ProtoOAUnsubscribeSpotsReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAUnsubscribeSpotsReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAUnsubscribeSpotsReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.symbolId && message.symbolId.length))
            message.symbolId = [];
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) message.symbolId.push(reader.int64());
          } else message.symbolId.push(reader.int64());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAUnsubscribeSpotsReq;
})();

$root.ProtoOAUnsubscribeSpotsRes = (function() {
  /**
   * Properties of a ProtoOAUnsubscribeSpotsRes.
   * @exports IProtoOAUnsubscribeSpotsRes
   * @interface IProtoOAUnsubscribeSpotsRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAUnsubscribeSpotsRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOAUnsubscribeSpotsRes ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAUnsubscribeSpotsRes.
   * @exports ProtoOAUnsubscribeSpotsRes
   * @classdesc Response to the ProtoOASubscribeSpotsRes request.
   * @implements IProtoOAUnsubscribeSpotsRes
   * @constructor
   * @param {IProtoOAUnsubscribeSpotsRes=} [properties] Properties to set
   */
  function ProtoOAUnsubscribeSpotsRes(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAUnsubscribeSpotsRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAUnsubscribeSpotsRes
   * @instance
   */
  ProtoOAUnsubscribeSpotsRes.prototype.payloadType = 2130;

  /**
   * ProtoOAUnsubscribeSpotsRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAUnsubscribeSpotsRes
   * @instance
   */
  ProtoOAUnsubscribeSpotsRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAUnsubscribeSpotsRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAUnsubscribeSpotsRes
   * @static
   * @param {IProtoOAUnsubscribeSpotsRes=} [properties] Properties to set
   * @returns {ProtoOAUnsubscribeSpotsRes} ProtoOAUnsubscribeSpotsRes instance
   */
  ProtoOAUnsubscribeSpotsRes.create = function create(properties) {
    return new ProtoOAUnsubscribeSpotsRes(properties);
  };

  /**
   * Encodes the specified ProtoOAUnsubscribeSpotsRes message. Does not implicitly {@link ProtoOAUnsubscribeSpotsRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAUnsubscribeSpotsRes
   * @static
   * @param {IProtoOAUnsubscribeSpotsRes} message ProtoOAUnsubscribeSpotsRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAUnsubscribeSpotsRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAUnsubscribeSpotsRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAUnsubscribeSpotsRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAUnsubscribeSpotsRes} ProtoOAUnsubscribeSpotsRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAUnsubscribeSpotsRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAUnsubscribeSpotsRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAUnsubscribeSpotsRes;
})();

$root.ProtoOASpotEvent = (function() {
  /**
   * Properties of a ProtoOASpotEvent.
   * @exports IProtoOASpotEvent
   * @interface IProtoOASpotEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASpotEvent payloadType
   * @property {Long} ctidTraderAccountId ProtoOASpotEvent ctidTraderAccountId
   * @property {Long} symbolId ProtoOASpotEvent symbolId
   * @property {Long|null} [bid] ProtoOASpotEvent bid
   * @property {Long|null} [ask] ProtoOASpotEvent ask
   * @property {Array.<IProtoOATrendbar>|null} [trendbar] ProtoOASpotEvent trendbar
   */

  /**
   * Constructs a new ProtoOASpotEvent.
   * @exports ProtoOASpotEvent
   * @classdesc Event that is sent when a new spot event is generated on the server side. Requires subscription on the spot events, see ProtoOASubscribeSpotsReq.
   * @implements IProtoOASpotEvent
   * @constructor
   * @param {IProtoOASpotEvent=} [properties] Properties to set
   */
  function ProtoOASpotEvent(properties) {
    this.trendbar = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASpotEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.payloadType = 2131;

  /**
   * ProtoOASpotEvent ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASpotEvent symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASpotEvent bid.
   * @member {Long} bid
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.bid = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOASpotEvent ask.
   * @member {Long} ask
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.ask = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOASpotEvent trendbar.
   * @member {Array.<IProtoOATrendbar>} trendbar
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.trendbar = $util.emptyArray;

  /**
   * Creates a new ProtoOASpotEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOASpotEvent
   * @static
   * @param {IProtoOASpotEvent=} [properties] Properties to set
   * @returns {ProtoOASpotEvent} ProtoOASpotEvent instance
   */
  ProtoOASpotEvent.create = function create(properties) {
    return new ProtoOASpotEvent(properties);
  };

  /**
   * Encodes the specified ProtoOASpotEvent message. Does not implicitly {@link ProtoOASpotEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASpotEvent
   * @static
   * @param {IProtoOASpotEvent} message ProtoOASpotEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASpotEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId);
    if (message.bid != null && message.hasOwnProperty("bid"))
      writer.uint32(/* id 4, wireType 0 =*/ 32).uint64(message.bid);
    if (message.ask != null && message.hasOwnProperty("ask"))
      writer.uint32(/* id 5, wireType 0 =*/ 40).uint64(message.ask);
    if (message.trendbar != null && message.trendbar.length)
      for (var i = 0; i < message.trendbar.length; ++i)
        $root.ProtoOATrendbar.encode(
          message.trendbar[i],
          writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOASpotEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASpotEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASpotEvent} ProtoOASpotEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASpotEvent.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASpotEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.symbolId = reader.int64();
          break;
        case 4:
          message.bid = reader.uint64();
          break;
        case 5:
          message.ask = reader.uint64();
          break;
        case 6:
          if (!(message.trendbar && message.trendbar.length))
            message.trendbar = [];
          message.trendbar.push(
            $root.ProtoOATrendbar.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASpotEvent;
})();

$root.ProtoOASubscribeLiveTrendbarReq = (function() {
  /**
   * Properties of a ProtoOASubscribeLiveTrendbarReq.
   * @exports IProtoOASubscribeLiveTrendbarReq
   * @interface IProtoOASubscribeLiveTrendbarReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASubscribeLiveTrendbarReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOASubscribeLiveTrendbarReq ctidTraderAccountId
   * @property {ProtoOATrendbarPeriod} period ProtoOASubscribeLiveTrendbarReq period
   * @property {Long} symbolId ProtoOASubscribeLiveTrendbarReq symbolId
   */

  /**
   * Constructs a new ProtoOASubscribeLiveTrendbarReq.
   * @exports ProtoOASubscribeLiveTrendbarReq
   * @classdesc Request for subscribing for live trend bars. Requires subscription on the spot events, see ProtoOASubscribeSpotsReq.
   * @implements IProtoOASubscribeLiveTrendbarReq
   * @constructor
   * @param {IProtoOASubscribeLiveTrendbarReq=} [properties] Properties to set
   */
  function ProtoOASubscribeLiveTrendbarReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASubscribeLiveTrendbarReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASubscribeLiveTrendbarReq
   * @instance
   */
  ProtoOASubscribeLiveTrendbarReq.prototype.payloadType = 2135;

  /**
   * ProtoOASubscribeLiveTrendbarReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASubscribeLiveTrendbarReq
   * @instance
   */
  ProtoOASubscribeLiveTrendbarReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASubscribeLiveTrendbarReq period.
   * @member {ProtoOATrendbarPeriod} period
   * @memberof ProtoOASubscribeLiveTrendbarReq
   * @instance
   */
  ProtoOASubscribeLiveTrendbarReq.prototype.period = 1;

  /**
   * ProtoOASubscribeLiveTrendbarReq symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOASubscribeLiveTrendbarReq
   * @instance
   */
  ProtoOASubscribeLiveTrendbarReq.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOASubscribeLiveTrendbarReq instance using the specified properties.
   * @function create
   * @memberof ProtoOASubscribeLiveTrendbarReq
   * @static
   * @param {IProtoOASubscribeLiveTrendbarReq=} [properties] Properties to set
   * @returns {ProtoOASubscribeLiveTrendbarReq} ProtoOASubscribeLiveTrendbarReq instance
   */
  ProtoOASubscribeLiveTrendbarReq.create = function create(properties) {
    return new ProtoOASubscribeLiveTrendbarReq(properties);
  };

  /**
   * Encodes the specified ProtoOASubscribeLiveTrendbarReq message. Does not implicitly {@link ProtoOASubscribeLiveTrendbarReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASubscribeLiveTrendbarReq
   * @static
   * @param {IProtoOASubscribeLiveTrendbarReq} message ProtoOASubscribeLiveTrendbarReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASubscribeLiveTrendbarReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.period);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.symbolId);
    return writer;
  };

  /**
   * Decodes a ProtoOASubscribeLiveTrendbarReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASubscribeLiveTrendbarReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASubscribeLiveTrendbarReq} ProtoOASubscribeLiveTrendbarReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASubscribeLiveTrendbarReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASubscribeLiveTrendbarReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.period = reader.int32();
          break;
        case 4:
          message.symbolId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("period"))
      throw $util.ProtocolError("missing required 'period'", {
        instance: message
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASubscribeLiveTrendbarReq;
})();

$root.ProtoOAUnsubscribeLiveTrendbarReq = (function() {
  /**
   * Properties of a ProtoOAUnsubscribeLiveTrendbarReq.
   * @exports IProtoOAUnsubscribeLiveTrendbarReq
   * @interface IProtoOAUnsubscribeLiveTrendbarReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAUnsubscribeLiveTrendbarReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAUnsubscribeLiveTrendbarReq ctidTraderAccountId
   * @property {ProtoOATrendbarPeriod} period ProtoOAUnsubscribeLiveTrendbarReq period
   * @property {Long} symbolId ProtoOAUnsubscribeLiveTrendbarReq symbolId
   */

  /**
   * Constructs a new ProtoOAUnsubscribeLiveTrendbarReq.
   * @exports ProtoOAUnsubscribeLiveTrendbarReq
   * @classdesc Request for unsubscribing from the live trend bars.
   * @implements IProtoOAUnsubscribeLiveTrendbarReq
   * @constructor
   * @param {IProtoOAUnsubscribeLiveTrendbarReq=} [properties] Properties to set
   */
  function ProtoOAUnsubscribeLiveTrendbarReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAUnsubscribeLiveTrendbarReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAUnsubscribeLiveTrendbarReq
   * @instance
   */
  ProtoOAUnsubscribeLiveTrendbarReq.prototype.payloadType = 2136;

  /**
   * ProtoOAUnsubscribeLiveTrendbarReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAUnsubscribeLiveTrendbarReq
   * @instance
   */
  ProtoOAUnsubscribeLiveTrendbarReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAUnsubscribeLiveTrendbarReq period.
   * @member {ProtoOATrendbarPeriod} period
   * @memberof ProtoOAUnsubscribeLiveTrendbarReq
   * @instance
   */
  ProtoOAUnsubscribeLiveTrendbarReq.prototype.period = 1;

  /**
   * ProtoOAUnsubscribeLiveTrendbarReq symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOAUnsubscribeLiveTrendbarReq
   * @instance
   */
  ProtoOAUnsubscribeLiveTrendbarReq.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAUnsubscribeLiveTrendbarReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAUnsubscribeLiveTrendbarReq
   * @static
   * @param {IProtoOAUnsubscribeLiveTrendbarReq=} [properties] Properties to set
   * @returns {ProtoOAUnsubscribeLiveTrendbarReq} ProtoOAUnsubscribeLiveTrendbarReq instance
   */
  ProtoOAUnsubscribeLiveTrendbarReq.create = function create(properties) {
    return new ProtoOAUnsubscribeLiveTrendbarReq(properties);
  };

  /**
   * Encodes the specified ProtoOAUnsubscribeLiveTrendbarReq message. Does not implicitly {@link ProtoOAUnsubscribeLiveTrendbarReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAUnsubscribeLiveTrendbarReq
   * @static
   * @param {IProtoOAUnsubscribeLiveTrendbarReq} message ProtoOAUnsubscribeLiveTrendbarReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAUnsubscribeLiveTrendbarReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.period);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.symbolId);
    return writer;
  };

  /**
   * Decodes a ProtoOAUnsubscribeLiveTrendbarReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAUnsubscribeLiveTrendbarReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAUnsubscribeLiveTrendbarReq} ProtoOAUnsubscribeLiveTrendbarReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAUnsubscribeLiveTrendbarReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAUnsubscribeLiveTrendbarReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.period = reader.int32();
          break;
        case 4:
          message.symbolId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("period"))
      throw $util.ProtocolError("missing required 'period'", {
        instance: message
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAUnsubscribeLiveTrendbarReq;
})();

$root.ProtoOAGetTrendbarsReq = (function() {
  /**
   * Properties of a ProtoOAGetTrendbarsReq.
   * @exports IProtoOAGetTrendbarsReq
   * @interface IProtoOAGetTrendbarsReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetTrendbarsReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAGetTrendbarsReq ctidTraderAccountId
   * @property {Long} fromTimestamp ProtoOAGetTrendbarsReq fromTimestamp
   * @property {Long} toTimestamp ProtoOAGetTrendbarsReq toTimestamp
   * @property {ProtoOATrendbarPeriod} period ProtoOAGetTrendbarsReq period
   * @property {Long} symbolId ProtoOAGetTrendbarsReq symbolId
   */

  /**
   * Constructs a new ProtoOAGetTrendbarsReq.
   * @exports ProtoOAGetTrendbarsReq
   * @classdesc Request for getting historical trend bars for the symbol.
   * @implements IProtoOAGetTrendbarsReq
   * @constructor
   * @param {IProtoOAGetTrendbarsReq=} [properties] Properties to set
   */
  function ProtoOAGetTrendbarsReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAGetTrendbarsReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.payloadType = 2137;

  /**
   * ProtoOAGetTrendbarsReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTrendbarsReq fromTimestamp.
   * @member {Long} fromTimestamp
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.fromTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTrendbarsReq toTimestamp.
   * @member {Long} toTimestamp
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.toTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTrendbarsReq period.
   * @member {ProtoOATrendbarPeriod} period
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.period = 1;

  /**
   * ProtoOAGetTrendbarsReq symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAGetTrendbarsReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAGetTrendbarsReq
   * @static
   * @param {IProtoOAGetTrendbarsReq=} [properties] Properties to set
   * @returns {ProtoOAGetTrendbarsReq} ProtoOAGetTrendbarsReq instance
   */
  ProtoOAGetTrendbarsReq.create = function create(properties) {
    return new ProtoOAGetTrendbarsReq(properties);
  };

  /**
   * Encodes the specified ProtoOAGetTrendbarsReq message. Does not implicitly {@link ProtoOAGetTrendbarsReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAGetTrendbarsReq
   * @static
   * @param {IProtoOAGetTrendbarsReq} message ProtoOAGetTrendbarsReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAGetTrendbarsReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.fromTimestamp);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.toTimestamp);
    writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.period);
    writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.symbolId);
    return writer;
  };

  /**
   * Decodes a ProtoOAGetTrendbarsReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAGetTrendbarsReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAGetTrendbarsReq} ProtoOAGetTrendbarsReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAGetTrendbarsReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAGetTrendbarsReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.fromTimestamp = reader.int64();
          break;
        case 4:
          message.toTimestamp = reader.int64();
          break;
        case 5:
          message.period = reader.int32();
          break;
        case 6:
          message.symbolId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("fromTimestamp"))
      throw $util.ProtocolError("missing required 'fromTimestamp'", {
        instance: message
      });
    if (!message.hasOwnProperty("toTimestamp"))
      throw $util.ProtocolError("missing required 'toTimestamp'", {
        instance: message
      });
    if (!message.hasOwnProperty("period"))
      throw $util.ProtocolError("missing required 'period'", {
        instance: message
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAGetTrendbarsReq;
})();

$root.ProtoOAGetTrendbarsRes = (function() {
  /**
   * Properties of a ProtoOAGetTrendbarsRes.
   * @exports IProtoOAGetTrendbarsRes
   * @interface IProtoOAGetTrendbarsRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetTrendbarsRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOAGetTrendbarsRes ctidTraderAccountId
   * @property {ProtoOATrendbarPeriod} period ProtoOAGetTrendbarsRes period
   * @property {Long} timestamp ProtoOAGetTrendbarsRes timestamp
   * @property {Array.<IProtoOATrendbar>|null} [trendbar] ProtoOAGetTrendbarsRes trendbar
   * @property {Long|null} [symbolId] ProtoOAGetTrendbarsRes symbolId
   */

  /**
   * Constructs a new ProtoOAGetTrendbarsRes.
   * @exports ProtoOAGetTrendbarsRes
   * @classdesc Response to the ProtoOAGetTrendbarsReq request.
   * @implements IProtoOAGetTrendbarsRes
   * @constructor
   * @param {IProtoOAGetTrendbarsRes=} [properties] Properties to set
   */
  function ProtoOAGetTrendbarsRes(properties) {
    this.trendbar = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAGetTrendbarsRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAGetTrendbarsRes
   * @instance
   */
  ProtoOAGetTrendbarsRes.prototype.payloadType = 2138;

  /**
   * ProtoOAGetTrendbarsRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAGetTrendbarsRes
   * @instance
   */
  ProtoOAGetTrendbarsRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTrendbarsRes period.
   * @member {ProtoOATrendbarPeriod} period
   * @memberof ProtoOAGetTrendbarsRes
   * @instance
   */
  ProtoOAGetTrendbarsRes.prototype.period = 1;

  /**
   * ProtoOAGetTrendbarsRes timestamp.
   * @member {Long} timestamp
   * @memberof ProtoOAGetTrendbarsRes
   * @instance
   */
  ProtoOAGetTrendbarsRes.prototype.timestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTrendbarsRes trendbar.
   * @member {Array.<IProtoOATrendbar>} trendbar
   * @memberof ProtoOAGetTrendbarsRes
   * @instance
   */
  ProtoOAGetTrendbarsRes.prototype.trendbar = $util.emptyArray;

  /**
   * ProtoOAGetTrendbarsRes symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOAGetTrendbarsRes
   * @instance
   */
  ProtoOAGetTrendbarsRes.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAGetTrendbarsRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAGetTrendbarsRes
   * @static
   * @param {IProtoOAGetTrendbarsRes=} [properties] Properties to set
   * @returns {ProtoOAGetTrendbarsRes} ProtoOAGetTrendbarsRes instance
   */
  ProtoOAGetTrendbarsRes.create = function create(properties) {
    return new ProtoOAGetTrendbarsRes(properties);
  };

  /**
   * Encodes the specified ProtoOAGetTrendbarsRes message. Does not implicitly {@link ProtoOAGetTrendbarsRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAGetTrendbarsRes
   * @static
   * @param {IProtoOAGetTrendbarsRes} message ProtoOAGetTrendbarsRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAGetTrendbarsRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.period);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.timestamp);
    if (message.trendbar != null && message.trendbar.length)
      for (var i = 0; i < message.trendbar.length; ++i)
        $root.ProtoOATrendbar.encode(
          message.trendbar[i],
          writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
        ).ldelim();
    if (message.symbolId != null && message.hasOwnProperty("symbolId"))
      writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.symbolId);
    return writer;
  };

  /**
   * Decodes a ProtoOAGetTrendbarsRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAGetTrendbarsRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAGetTrendbarsRes} ProtoOAGetTrendbarsRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAGetTrendbarsRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAGetTrendbarsRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.period = reader.int32();
          break;
        case 4:
          message.timestamp = reader.int64();
          break;
        case 5:
          if (!(message.trendbar && message.trendbar.length))
            message.trendbar = [];
          message.trendbar.push(
            $root.ProtoOATrendbar.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.symbolId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("period"))
      throw $util.ProtocolError("missing required 'period'", {
        instance: message
      });
    if (!message.hasOwnProperty("timestamp"))
      throw $util.ProtocolError("missing required 'timestamp'", {
        instance: message
      });
    return message;
  };

  return ProtoOAGetTrendbarsRes;
})();

$root.ProtoOAGetTickDataReq = (function() {
  /**
   * Properties of a ProtoOAGetTickDataReq.
   * @exports IProtoOAGetTickDataReq
   * @interface IProtoOAGetTickDataReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetTickDataReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAGetTickDataReq ctidTraderAccountId
   * @property {Long} symbolId ProtoOAGetTickDataReq symbolId
   * @property {ProtoOAQuoteType} type ProtoOAGetTickDataReq type
   * @property {Long} fromTimestamp ProtoOAGetTickDataReq fromTimestamp
   * @property {Long} toTimestamp ProtoOAGetTickDataReq toTimestamp
   */

  /**
   * Constructs a new ProtoOAGetTickDataReq.
   * @exports ProtoOAGetTickDataReq
   * @classdesc Request for getting historical tick data for the symbol.
   * @implements IProtoOAGetTickDataReq
   * @constructor
   * @param {IProtoOAGetTickDataReq=} [properties] Properties to set
   */
  function ProtoOAGetTickDataReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAGetTickDataReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAGetTickDataReq
   * @instance
   */
  ProtoOAGetTickDataReq.prototype.payloadType = 2145;

  /**
   * ProtoOAGetTickDataReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAGetTickDataReq
   * @instance
   */
  ProtoOAGetTickDataReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTickDataReq symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOAGetTickDataReq
   * @instance
   */
  ProtoOAGetTickDataReq.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTickDataReq type.
   * @member {ProtoOAQuoteType} type
   * @memberof ProtoOAGetTickDataReq
   * @instance
   */
  ProtoOAGetTickDataReq.prototype.type = 1;

  /**
   * ProtoOAGetTickDataReq fromTimestamp.
   * @member {Long} fromTimestamp
   * @memberof ProtoOAGetTickDataReq
   * @instance
   */
  ProtoOAGetTickDataReq.prototype.fromTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTickDataReq toTimestamp.
   * @member {Long} toTimestamp
   * @memberof ProtoOAGetTickDataReq
   * @instance
   */
  ProtoOAGetTickDataReq.prototype.toTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAGetTickDataReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAGetTickDataReq
   * @static
   * @param {IProtoOAGetTickDataReq=} [properties] Properties to set
   * @returns {ProtoOAGetTickDataReq} ProtoOAGetTickDataReq instance
   */
  ProtoOAGetTickDataReq.create = function create(properties) {
    return new ProtoOAGetTickDataReq(properties);
  };

  /**
   * Encodes the specified ProtoOAGetTickDataReq message. Does not implicitly {@link ProtoOAGetTickDataReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAGetTickDataReq
   * @static
   * @param {IProtoOAGetTickDataReq} message ProtoOAGetTickDataReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAGetTickDataReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.type);
    writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.fromTimestamp);
    writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.toTimestamp);
    return writer;
  };

  /**
   * Decodes a ProtoOAGetTickDataReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAGetTickDataReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAGetTickDataReq} ProtoOAGetTickDataReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAGetTickDataReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAGetTickDataReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.symbolId = reader.int64();
          break;
        case 4:
          message.type = reader.int32();
          break;
        case 5:
          message.fromTimestamp = reader.int64();
          break;
        case 6:
          message.toTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message
      });
    if (!message.hasOwnProperty("type"))
      throw $util.ProtocolError("missing required 'type'", {
        instance: message
      });
    if (!message.hasOwnProperty("fromTimestamp"))
      throw $util.ProtocolError("missing required 'fromTimestamp'", {
        instance: message
      });
    if (!message.hasOwnProperty("toTimestamp"))
      throw $util.ProtocolError("missing required 'toTimestamp'", {
        instance: message
      });
    return message;
  };

  return ProtoOAGetTickDataReq;
})();

$root.ProtoOAGetTickDataRes = (function() {
  /**
   * Properties of a ProtoOAGetTickDataRes.
   * @exports IProtoOAGetTickDataRes
   * @interface IProtoOAGetTickDataRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetTickDataRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOAGetTickDataRes ctidTraderAccountId
   * @property {Array.<IProtoOATickData>|null} [tickData] ProtoOAGetTickDataRes tickData
   * @property {boolean} hasMore ProtoOAGetTickDataRes hasMore
   */

  /**
   * Constructs a new ProtoOAGetTickDataRes.
   * @exports ProtoOAGetTickDataRes
   * @classdesc Response to the ProtoOAGetTickDataReq request.
   * @implements IProtoOAGetTickDataRes
   * @constructor
   * @param {IProtoOAGetTickDataRes=} [properties] Properties to set
   */
  function ProtoOAGetTickDataRes(properties) {
    this.tickData = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAGetTickDataRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAGetTickDataRes
   * @instance
   */
  ProtoOAGetTickDataRes.prototype.payloadType = 2146;

  /**
   * ProtoOAGetTickDataRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAGetTickDataRes
   * @instance
   */
  ProtoOAGetTickDataRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTickDataRes tickData.
   * @member {Array.<IProtoOATickData>} tickData
   * @memberof ProtoOAGetTickDataRes
   * @instance
   */
  ProtoOAGetTickDataRes.prototype.tickData = $util.emptyArray;

  /**
   * ProtoOAGetTickDataRes hasMore.
   * @member {boolean} hasMore
   * @memberof ProtoOAGetTickDataRes
   * @instance
   */
  ProtoOAGetTickDataRes.prototype.hasMore = false;

  /**
   * Creates a new ProtoOAGetTickDataRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAGetTickDataRes
   * @static
   * @param {IProtoOAGetTickDataRes=} [properties] Properties to set
   * @returns {ProtoOAGetTickDataRes} ProtoOAGetTickDataRes instance
   */
  ProtoOAGetTickDataRes.create = function create(properties) {
    return new ProtoOAGetTickDataRes(properties);
  };

  /**
   * Encodes the specified ProtoOAGetTickDataRes message. Does not implicitly {@link ProtoOAGetTickDataRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAGetTickDataRes
   * @static
   * @param {IProtoOAGetTickDataRes} message ProtoOAGetTickDataRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAGetTickDataRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.tickData != null && message.tickData.length)
      for (var i = 0; i < message.tickData.length; ++i)
        $root.ProtoOATickData.encode(
          message.tickData[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.hasMore);
    return writer;
  };

  /**
   * Decodes a ProtoOAGetTickDataRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAGetTickDataRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAGetTickDataRes} ProtoOAGetTickDataRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAGetTickDataRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAGetTickDataRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.tickData && message.tickData.length))
            message.tickData = [];
          message.tickData.push(
            $root.ProtoOATickData.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.hasMore = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("hasMore"))
      throw $util.ProtocolError("missing required 'hasMore'", {
        instance: message
      });
    return message;
  };

  return ProtoOAGetTickDataRes;
})();

$root.ProtoOAGetCtidProfileByTokenReq = (function() {
  /**
   * Properties of a ProtoOAGetCtidProfileByTokenReq.
   * @exports IProtoOAGetCtidProfileByTokenReq
   * @interface IProtoOAGetCtidProfileByTokenReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetCtidProfileByTokenReq payloadType
   * @property {string} accessToken ProtoOAGetCtidProfileByTokenReq accessToken
   */

  /**
   * Constructs a new ProtoOAGetCtidProfileByTokenReq.
   * @exports ProtoOAGetCtidProfileByTokenReq
   * @classdesc Request for getting details of Trader's profile. Limited due to GDRP requirements.
   * @implements IProtoOAGetCtidProfileByTokenReq
   * @constructor
   * @param {IProtoOAGetCtidProfileByTokenReq=} [properties] Properties to set
   */
  function ProtoOAGetCtidProfileByTokenReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAGetCtidProfileByTokenReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAGetCtidProfileByTokenReq
   * @instance
   */
  ProtoOAGetCtidProfileByTokenReq.prototype.payloadType = 2151;

  /**
   * ProtoOAGetCtidProfileByTokenReq accessToken.
   * @member {string} accessToken
   * @memberof ProtoOAGetCtidProfileByTokenReq
   * @instance
   */
  ProtoOAGetCtidProfileByTokenReq.prototype.accessToken = "";

  /**
   * Creates a new ProtoOAGetCtidProfileByTokenReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAGetCtidProfileByTokenReq
   * @static
   * @param {IProtoOAGetCtidProfileByTokenReq=} [properties] Properties to set
   * @returns {ProtoOAGetCtidProfileByTokenReq} ProtoOAGetCtidProfileByTokenReq instance
   */
  ProtoOAGetCtidProfileByTokenReq.create = function create(properties) {
    return new ProtoOAGetCtidProfileByTokenReq(properties);
  };

  /**
   * Encodes the specified ProtoOAGetCtidProfileByTokenReq message. Does not implicitly {@link ProtoOAGetCtidProfileByTokenReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAGetCtidProfileByTokenReq
   * @static
   * @param {IProtoOAGetCtidProfileByTokenReq} message ProtoOAGetCtidProfileByTokenReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAGetCtidProfileByTokenReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.accessToken);
    return writer;
  };

  /**
   * Decodes a ProtoOAGetCtidProfileByTokenReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAGetCtidProfileByTokenReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAGetCtidProfileByTokenReq} ProtoOAGetCtidProfileByTokenReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAGetCtidProfileByTokenReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAGetCtidProfileByTokenReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("accessToken"))
      throw $util.ProtocolError("missing required 'accessToken'", {
        instance: message
      });
    return message;
  };

  return ProtoOAGetCtidProfileByTokenReq;
})();

$root.ProtoOAGetCtidProfileByTokenRes = (function() {
  /**
   * Properties of a ProtoOAGetCtidProfileByTokenRes.
   * @exports IProtoOAGetCtidProfileByTokenRes
   * @interface IProtoOAGetCtidProfileByTokenRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetCtidProfileByTokenRes payloadType
   * @property {IProtoOACtidProfile} profile ProtoOAGetCtidProfileByTokenRes profile
   */

  /**
   * Constructs a new ProtoOAGetCtidProfileByTokenRes.
   * @exports ProtoOAGetCtidProfileByTokenRes
   * @classdesc Response to the ProtoOAGetCtidProfileByTokenReq request.
   * @implements IProtoOAGetCtidProfileByTokenRes
   * @constructor
   * @param {IProtoOAGetCtidProfileByTokenRes=} [properties] Properties to set
   */
  function ProtoOAGetCtidProfileByTokenRes(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAGetCtidProfileByTokenRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAGetCtidProfileByTokenRes
   * @instance
   */
  ProtoOAGetCtidProfileByTokenRes.prototype.payloadType = 2152;

  /**
   * ProtoOAGetCtidProfileByTokenRes profile.
   * @member {IProtoOACtidProfile} profile
   * @memberof ProtoOAGetCtidProfileByTokenRes
   * @instance
   */
  ProtoOAGetCtidProfileByTokenRes.prototype.profile = null;

  /**
   * Creates a new ProtoOAGetCtidProfileByTokenRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAGetCtidProfileByTokenRes
   * @static
   * @param {IProtoOAGetCtidProfileByTokenRes=} [properties] Properties to set
   * @returns {ProtoOAGetCtidProfileByTokenRes} ProtoOAGetCtidProfileByTokenRes instance
   */
  ProtoOAGetCtidProfileByTokenRes.create = function create(properties) {
    return new ProtoOAGetCtidProfileByTokenRes(properties);
  };

  /**
   * Encodes the specified ProtoOAGetCtidProfileByTokenRes message. Does not implicitly {@link ProtoOAGetCtidProfileByTokenRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAGetCtidProfileByTokenRes
   * @static
   * @param {IProtoOAGetCtidProfileByTokenRes} message ProtoOAGetCtidProfileByTokenRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAGetCtidProfileByTokenRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    $root.ProtoOACtidProfile.encode(
      message.profile,
      writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
    ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOAGetCtidProfileByTokenRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAGetCtidProfileByTokenRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAGetCtidProfileByTokenRes} ProtoOAGetCtidProfileByTokenRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAGetCtidProfileByTokenRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAGetCtidProfileByTokenRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.profile = $root.ProtoOACtidProfile.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("profile"))
      throw $util.ProtocolError("missing required 'profile'", {
        instance: message
      });
    return message;
  };

  return ProtoOAGetCtidProfileByTokenRes;
})();

$root.ProtoOADepthEvent = (function() {
  /**
   * Properties of a ProtoOADepthEvent.
   * @exports IProtoOADepthEvent
   * @interface IProtoOADepthEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOADepthEvent payloadType
   * @property {Long} ctidTraderAccountId ProtoOADepthEvent ctidTraderAccountId
   * @property {Long} symbolId ProtoOADepthEvent symbolId
   * @property {Array.<IProtoOADepthQuote>|null} [newQuotes] ProtoOADepthEvent newQuotes
   * @property {Array.<Long>|null} [deletedQuotes] ProtoOADepthEvent deletedQuotes
   */

  /**
   * Constructs a new ProtoOADepthEvent.
   * @exports ProtoOADepthEvent
   * @classdesc Event that is sent when the structure of depth of market is changed. Requires subscription on the depth of markets for the symbol, see ProtoOASubscribeDepthQuotesReq.
   * @implements IProtoOADepthEvent
   * @constructor
   * @param {IProtoOADepthEvent=} [properties] Properties to set
   */
  function ProtoOADepthEvent(properties) {
    this.newQuotes = [];
    this.deletedQuotes = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADepthEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOADepthEvent
   * @instance
   */
  ProtoOADepthEvent.prototype.payloadType = 2155;

  /**
   * ProtoOADepthEvent ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOADepthEvent
   * @instance
   */
  ProtoOADepthEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepthEvent symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOADepthEvent
   * @instance
   */
  ProtoOADepthEvent.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOADepthEvent newQuotes.
   * @member {Array.<IProtoOADepthQuote>} newQuotes
   * @memberof ProtoOADepthEvent
   * @instance
   */
  ProtoOADepthEvent.prototype.newQuotes = $util.emptyArray;

  /**
   * ProtoOADepthEvent deletedQuotes.
   * @member {Array.<Long>} deletedQuotes
   * @memberof ProtoOADepthEvent
   * @instance
   */
  ProtoOADepthEvent.prototype.deletedQuotes = $util.emptyArray;

  /**
   * Creates a new ProtoOADepthEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOADepthEvent
   * @static
   * @param {IProtoOADepthEvent=} [properties] Properties to set
   * @returns {ProtoOADepthEvent} ProtoOADepthEvent instance
   */
  ProtoOADepthEvent.create = function create(properties) {
    return new ProtoOADepthEvent(properties);
  };

  /**
   * Encodes the specified ProtoOADepthEvent message. Does not implicitly {@link ProtoOADepthEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADepthEvent
   * @static
   * @param {IProtoOADepthEvent} message ProtoOADepthEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADepthEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.symbolId);
    if (message.newQuotes != null && message.newQuotes.length)
      for (var i = 0; i < message.newQuotes.length; ++i)
        $root.ProtoOADepthQuote.encode(
          message.newQuotes[i],
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
    if (message.deletedQuotes != null && message.deletedQuotes.length) {
      writer.uint32(/* id 5, wireType 2 =*/ 42).fork();
      for (var i = 0; i < message.deletedQuotes.length; ++i)
        writer.uint64(message.deletedQuotes[i]);
      writer.ldelim();
    }
    return writer;
  };

  /**
   * Decodes a ProtoOADepthEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADepthEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADepthEvent} ProtoOADepthEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADepthEvent.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADepthEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          message.symbolId = reader.uint64();
          break;
        case 4:
          if (!(message.newQuotes && message.newQuotes.length))
            message.newQuotes = [];
          message.newQuotes.push(
            $root.ProtoOADepthQuote.decode(reader, reader.uint32())
          );
          break;
        case 5:
          if (!(message.deletedQuotes && message.deletedQuotes.length))
            message.deletedQuotes = [];
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2)
              message.deletedQuotes.push(reader.uint64());
          } else message.deletedQuotes.push(reader.uint64());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message
      });
    return message;
  };

  return ProtoOADepthEvent;
})();

$root.ProtoOASubscribeDepthQuotesReq = (function() {
  /**
   * Properties of a ProtoOASubscribeDepthQuotesReq.
   * @exports IProtoOASubscribeDepthQuotesReq
   * @interface IProtoOASubscribeDepthQuotesReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASubscribeDepthQuotesReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOASubscribeDepthQuotesReq ctidTraderAccountId
   * @property {Array.<Long>|null} [symbolId] ProtoOASubscribeDepthQuotesReq symbolId
   */

  /**
   * Constructs a new ProtoOASubscribeDepthQuotesReq.
   * @exports ProtoOASubscribeDepthQuotesReq
   * @classdesc Request for subscribing on depth of market of the specified symbol.
   * @implements IProtoOASubscribeDepthQuotesReq
   * @constructor
   * @param {IProtoOASubscribeDepthQuotesReq=} [properties] Properties to set
   */
  function ProtoOASubscribeDepthQuotesReq(properties) {
    this.symbolId = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASubscribeDepthQuotesReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASubscribeDepthQuotesReq
   * @instance
   */
  ProtoOASubscribeDepthQuotesReq.prototype.payloadType = 2156;

  /**
   * ProtoOASubscribeDepthQuotesReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASubscribeDepthQuotesReq
   * @instance
   */
  ProtoOASubscribeDepthQuotesReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASubscribeDepthQuotesReq symbolId.
   * @member {Array.<Long>} symbolId
   * @memberof ProtoOASubscribeDepthQuotesReq
   * @instance
   */
  ProtoOASubscribeDepthQuotesReq.prototype.symbolId = $util.emptyArray;

  /**
   * Creates a new ProtoOASubscribeDepthQuotesReq instance using the specified properties.
   * @function create
   * @memberof ProtoOASubscribeDepthQuotesReq
   * @static
   * @param {IProtoOASubscribeDepthQuotesReq=} [properties] Properties to set
   * @returns {ProtoOASubscribeDepthQuotesReq} ProtoOASubscribeDepthQuotesReq instance
   */
  ProtoOASubscribeDepthQuotesReq.create = function create(properties) {
    return new ProtoOASubscribeDepthQuotesReq(properties);
  };

  /**
   * Encodes the specified ProtoOASubscribeDepthQuotesReq message. Does not implicitly {@link ProtoOASubscribeDepthQuotesReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASubscribeDepthQuotesReq
   * @static
   * @param {IProtoOASubscribeDepthQuotesReq} message ProtoOASubscribeDepthQuotesReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASubscribeDepthQuotesReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbolId != null && message.symbolId.length)
      for (var i = 0; i < message.symbolId.length; ++i)
        writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId[i]);
    return writer;
  };

  /**
   * Decodes a ProtoOASubscribeDepthQuotesReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASubscribeDepthQuotesReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASubscribeDepthQuotesReq} ProtoOASubscribeDepthQuotesReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASubscribeDepthQuotesReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASubscribeDepthQuotesReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.symbolId && message.symbolId.length))
            message.symbolId = [];
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) message.symbolId.push(reader.int64());
          } else message.symbolId.push(reader.int64());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASubscribeDepthQuotesReq;
})();

$root.ProtoOASubscribeDepthQuotesRes = (function() {
  /**
   * Properties of a ProtoOASubscribeDepthQuotesRes.
   * @exports IProtoOASubscribeDepthQuotesRes
   * @interface IProtoOASubscribeDepthQuotesRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASubscribeDepthQuotesRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOASubscribeDepthQuotesRes ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOASubscribeDepthQuotesRes.
   * @exports ProtoOASubscribeDepthQuotesRes
   * @classdesc Response to the ProtoOASubscribeDepthQuotesReq request.
   * @implements IProtoOASubscribeDepthQuotesRes
   * @constructor
   * @param {IProtoOASubscribeDepthQuotesRes=} [properties] Properties to set
   */
  function ProtoOASubscribeDepthQuotesRes(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASubscribeDepthQuotesRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASubscribeDepthQuotesRes
   * @instance
   */
  ProtoOASubscribeDepthQuotesRes.prototype.payloadType = 2157;

  /**
   * ProtoOASubscribeDepthQuotesRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASubscribeDepthQuotesRes
   * @instance
   */
  ProtoOASubscribeDepthQuotesRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOASubscribeDepthQuotesRes instance using the specified properties.
   * @function create
   * @memberof ProtoOASubscribeDepthQuotesRes
   * @static
   * @param {IProtoOASubscribeDepthQuotesRes=} [properties] Properties to set
   * @returns {ProtoOASubscribeDepthQuotesRes} ProtoOASubscribeDepthQuotesRes instance
   */
  ProtoOASubscribeDepthQuotesRes.create = function create(properties) {
    return new ProtoOASubscribeDepthQuotesRes(properties);
  };

  /**
   * Encodes the specified ProtoOASubscribeDepthQuotesRes message. Does not implicitly {@link ProtoOASubscribeDepthQuotesRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASubscribeDepthQuotesRes
   * @static
   * @param {IProtoOASubscribeDepthQuotesRes} message ProtoOASubscribeDepthQuotesRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASubscribeDepthQuotesRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOASubscribeDepthQuotesRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASubscribeDepthQuotesRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASubscribeDepthQuotesRes} ProtoOASubscribeDepthQuotesRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASubscribeDepthQuotesRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASubscribeDepthQuotesRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASubscribeDepthQuotesRes;
})();

$root.ProtoOAUnsubscribeDepthQuotesReq = (function() {
  /**
   * Properties of a ProtoOAUnsubscribeDepthQuotesReq.
   * @exports IProtoOAUnsubscribeDepthQuotesReq
   * @interface IProtoOAUnsubscribeDepthQuotesReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAUnsubscribeDepthQuotesReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAUnsubscribeDepthQuotesReq ctidTraderAccountId
   * @property {Array.<Long>|null} [symbolId] ProtoOAUnsubscribeDepthQuotesReq symbolId
   */

  /**
   * Constructs a new ProtoOAUnsubscribeDepthQuotesReq.
   * @exports ProtoOAUnsubscribeDepthQuotesReq
   * @classdesc Request for unsubscribing from the depth of market of the specified symbol.
   * @implements IProtoOAUnsubscribeDepthQuotesReq
   * @constructor
   * @param {IProtoOAUnsubscribeDepthQuotesReq=} [properties] Properties to set
   */
  function ProtoOAUnsubscribeDepthQuotesReq(properties) {
    this.symbolId = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAUnsubscribeDepthQuotesReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAUnsubscribeDepthQuotesReq
   * @instance
   */
  ProtoOAUnsubscribeDepthQuotesReq.prototype.payloadType = 2158;

  /**
   * ProtoOAUnsubscribeDepthQuotesReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAUnsubscribeDepthQuotesReq
   * @instance
   */
  ProtoOAUnsubscribeDepthQuotesReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAUnsubscribeDepthQuotesReq symbolId.
   * @member {Array.<Long>} symbolId
   * @memberof ProtoOAUnsubscribeDepthQuotesReq
   * @instance
   */
  ProtoOAUnsubscribeDepthQuotesReq.prototype.symbolId = $util.emptyArray;

  /**
   * Creates a new ProtoOAUnsubscribeDepthQuotesReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAUnsubscribeDepthQuotesReq
   * @static
   * @param {IProtoOAUnsubscribeDepthQuotesReq=} [properties] Properties to set
   * @returns {ProtoOAUnsubscribeDepthQuotesReq} ProtoOAUnsubscribeDepthQuotesReq instance
   */
  ProtoOAUnsubscribeDepthQuotesReq.create = function create(properties) {
    return new ProtoOAUnsubscribeDepthQuotesReq(properties);
  };

  /**
   * Encodes the specified ProtoOAUnsubscribeDepthQuotesReq message. Does not implicitly {@link ProtoOAUnsubscribeDepthQuotesReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAUnsubscribeDepthQuotesReq
   * @static
   * @param {IProtoOAUnsubscribeDepthQuotesReq} message ProtoOAUnsubscribeDepthQuotesReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAUnsubscribeDepthQuotesReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbolId != null && message.symbolId.length)
      for (var i = 0; i < message.symbolId.length; ++i)
        writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId[i]);
    return writer;
  };

  /**
   * Decodes a ProtoOAUnsubscribeDepthQuotesReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAUnsubscribeDepthQuotesReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAUnsubscribeDepthQuotesReq} ProtoOAUnsubscribeDepthQuotesReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAUnsubscribeDepthQuotesReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAUnsubscribeDepthQuotesReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.symbolId && message.symbolId.length))
            message.symbolId = [];
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) message.symbolId.push(reader.int64());
          } else message.symbolId.push(reader.int64());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAUnsubscribeDepthQuotesReq;
})();

$root.ProtoOAUnsubscribeDepthQuotesRes = (function() {
  /**
   * Properties of a ProtoOAUnsubscribeDepthQuotesRes.
   * @exports IProtoOAUnsubscribeDepthQuotesRes
   * @interface IProtoOAUnsubscribeDepthQuotesRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAUnsubscribeDepthQuotesRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOAUnsubscribeDepthQuotesRes ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAUnsubscribeDepthQuotesRes.
   * @exports ProtoOAUnsubscribeDepthQuotesRes
   * @classdesc Response to the ProtoOAUnsubscribeDepthQuotesReq request.
   * @implements IProtoOAUnsubscribeDepthQuotesRes
   * @constructor
   * @param {IProtoOAUnsubscribeDepthQuotesRes=} [properties] Properties to set
   */
  function ProtoOAUnsubscribeDepthQuotesRes(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAUnsubscribeDepthQuotesRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAUnsubscribeDepthQuotesRes
   * @instance
   */
  ProtoOAUnsubscribeDepthQuotesRes.prototype.payloadType = 2159;

  /**
   * ProtoOAUnsubscribeDepthQuotesRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAUnsubscribeDepthQuotesRes
   * @instance
   */
  ProtoOAUnsubscribeDepthQuotesRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAUnsubscribeDepthQuotesRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAUnsubscribeDepthQuotesRes
   * @static
   * @param {IProtoOAUnsubscribeDepthQuotesRes=} [properties] Properties to set
   * @returns {ProtoOAUnsubscribeDepthQuotesRes} ProtoOAUnsubscribeDepthQuotesRes instance
   */
  ProtoOAUnsubscribeDepthQuotesRes.create = function create(properties) {
    return new ProtoOAUnsubscribeDepthQuotesRes(properties);
  };

  /**
   * Encodes the specified ProtoOAUnsubscribeDepthQuotesRes message. Does not implicitly {@link ProtoOAUnsubscribeDepthQuotesRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAUnsubscribeDepthQuotesRes
   * @static
   * @param {IProtoOAUnsubscribeDepthQuotesRes} message ProtoOAUnsubscribeDepthQuotesRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAUnsubscribeDepthQuotesRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAUnsubscribeDepthQuotesRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAUnsubscribeDepthQuotesRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAUnsubscribeDepthQuotesRes} ProtoOAUnsubscribeDepthQuotesRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAUnsubscribeDepthQuotesRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAUnsubscribeDepthQuotesRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAUnsubscribeDepthQuotesRes;
})();

$root.ProtoOASymbolCategoryListReq = (function() {
  /**
   * Properties of a ProtoOASymbolCategoryListReq.
   * @exports IProtoOASymbolCategoryListReq
   * @interface IProtoOASymbolCategoryListReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolCategoryListReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOASymbolCategoryListReq ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOASymbolCategoryListReq.
   * @exports ProtoOASymbolCategoryListReq
   * @classdesc Request for a list of symbol categories available for a trading account.
   * @implements IProtoOASymbolCategoryListReq
   * @constructor
   * @param {IProtoOASymbolCategoryListReq=} [properties] Properties to set
   */
  function ProtoOASymbolCategoryListReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolCategoryListReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolCategoryListReq
   * @instance
   */
  ProtoOASymbolCategoryListReq.prototype.payloadType = 2160;

  /**
   * ProtoOASymbolCategoryListReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASymbolCategoryListReq
   * @instance
   */
  ProtoOASymbolCategoryListReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOASymbolCategoryListReq instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolCategoryListReq
   * @static
   * @param {IProtoOASymbolCategoryListReq=} [properties] Properties to set
   * @returns {ProtoOASymbolCategoryListReq} ProtoOASymbolCategoryListReq instance
   */
  ProtoOASymbolCategoryListReq.create = function create(properties) {
    return new ProtoOASymbolCategoryListReq(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolCategoryListReq message. Does not implicitly {@link ProtoOASymbolCategoryListReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolCategoryListReq
   * @static
   * @param {IProtoOASymbolCategoryListReq} message ProtoOASymbolCategoryListReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolCategoryListReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolCategoryListReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolCategoryListReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolCategoryListReq} ProtoOASymbolCategoryListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolCategoryListReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolCategoryListReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASymbolCategoryListReq;
})();

$root.ProtoOASymbolCategoryListRes = (function() {
  /**
   * Properties of a ProtoOASymbolCategoryListRes.
   * @exports IProtoOASymbolCategoryListRes
   * @interface IProtoOASymbolCategoryListRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolCategoryListRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOASymbolCategoryListRes ctidTraderAccountId
   * @property {Array.<IProtoOASymbolCategory>|null} [symbolCategory] ProtoOASymbolCategoryListRes symbolCategory
   */

  /**
   * Constructs a new ProtoOASymbolCategoryListRes.
   * @exports ProtoOASymbolCategoryListRes
   * @classdesc Response to the ProtoSymbolCategoryListReq request.
   * @implements IProtoOASymbolCategoryListRes
   * @constructor
   * @param {IProtoOASymbolCategoryListRes=} [properties] Properties to set
   */
  function ProtoOASymbolCategoryListRes(properties) {
    this.symbolCategory = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolCategoryListRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolCategoryListRes
   * @instance
   */
  ProtoOASymbolCategoryListRes.prototype.payloadType = 2161;

  /**
   * ProtoOASymbolCategoryListRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOASymbolCategoryListRes
   * @instance
   */
  ProtoOASymbolCategoryListRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolCategoryListRes symbolCategory.
   * @member {Array.<IProtoOASymbolCategory>} symbolCategory
   * @memberof ProtoOASymbolCategoryListRes
   * @instance
   */
  ProtoOASymbolCategoryListRes.prototype.symbolCategory = $util.emptyArray;

  /**
   * Creates a new ProtoOASymbolCategoryListRes instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolCategoryListRes
   * @static
   * @param {IProtoOASymbolCategoryListRes=} [properties] Properties to set
   * @returns {ProtoOASymbolCategoryListRes} ProtoOASymbolCategoryListRes instance
   */
  ProtoOASymbolCategoryListRes.create = function create(properties) {
    return new ProtoOASymbolCategoryListRes(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolCategoryListRes message. Does not implicitly {@link ProtoOASymbolCategoryListRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolCategoryListRes
   * @static
   * @param {IProtoOASymbolCategoryListRes} message ProtoOASymbolCategoryListRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolCategoryListRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbolCategory != null && message.symbolCategory.length)
      for (var i = 0; i < message.symbolCategory.length; ++i)
        $root.ProtoOASymbolCategory.encode(
          message.symbolCategory[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolCategoryListRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolCategoryListRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolCategoryListRes} ProtoOASymbolCategoryListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolCategoryListRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolCategoryListRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 3:
          if (!(message.symbolCategory && message.symbolCategory.length))
            message.symbolCategory = [];
          message.symbolCategory.push(
            $root.ProtoOASymbolCategory.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOASymbolCategoryListRes;
})();

$root.ProtoOAAccountLogoutReq = (function() {
  /**
   * Properties of a ProtoOAAccountLogoutReq.
   * @exports IProtoOAAccountLogoutReq
   * @interface IProtoOAAccountLogoutReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAccountLogoutReq payloadType
   * @property {Long} ctidTraderAccountId ProtoOAAccountLogoutReq ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAAccountLogoutReq.
   * @exports ProtoOAAccountLogoutReq
   * @classdesc Request for logout of  trading account session.
   * @implements IProtoOAAccountLogoutReq
   * @constructor
   * @param {IProtoOAAccountLogoutReq=} [properties] Properties to set
   */
  function ProtoOAAccountLogoutReq(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAccountLogoutReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAccountLogoutReq
   * @instance
   */
  ProtoOAAccountLogoutReq.prototype.payloadType = 2162;

  /**
   * ProtoOAAccountLogoutReq ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAAccountLogoutReq
   * @instance
   */
  ProtoOAAccountLogoutReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAAccountLogoutReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAAccountLogoutReq
   * @static
   * @param {IProtoOAAccountLogoutReq=} [properties] Properties to set
   * @returns {ProtoOAAccountLogoutReq} ProtoOAAccountLogoutReq instance
   */
  ProtoOAAccountLogoutReq.create = function create(properties) {
    return new ProtoOAAccountLogoutReq(properties);
  };

  /**
   * Encodes the specified ProtoOAAccountLogoutReq message. Does not implicitly {@link ProtoOAAccountLogoutReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAccountLogoutReq
   * @static
   * @param {IProtoOAAccountLogoutReq} message ProtoOAAccountLogoutReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAccountLogoutReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAAccountLogoutReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAccountLogoutReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAccountLogoutReq} ProtoOAAccountLogoutReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAccountLogoutReq.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAccountLogoutReq();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAAccountLogoutReq;
})();

$root.ProtoOAAccountLogoutRes = (function() {
  /**
   * Properties of a ProtoOAAccountLogoutRes.
   * @exports IProtoOAAccountLogoutRes
   * @interface IProtoOAAccountLogoutRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAccountLogoutRes payloadType
   * @property {Long} ctidTraderAccountId ProtoOAAccountLogoutRes ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAAccountLogoutRes.
   * @exports ProtoOAAccountLogoutRes
   * @classdesc Response to the ProtoOATraderLogoutReq request.
   * @implements IProtoOAAccountLogoutRes
   * @constructor
   * @param {IProtoOAAccountLogoutRes=} [properties] Properties to set
   */
  function ProtoOAAccountLogoutRes(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAccountLogoutRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAccountLogoutRes
   * @instance
   */
  ProtoOAAccountLogoutRes.prototype.payloadType = 2163;

  /**
   * ProtoOAAccountLogoutRes ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAAccountLogoutRes
   * @instance
   */
  ProtoOAAccountLogoutRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAAccountLogoutRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAAccountLogoutRes
   * @static
   * @param {IProtoOAAccountLogoutRes=} [properties] Properties to set
   * @returns {ProtoOAAccountLogoutRes} ProtoOAAccountLogoutRes instance
   */
  ProtoOAAccountLogoutRes.create = function create(properties) {
    return new ProtoOAAccountLogoutRes(properties);
  };

  /**
   * Encodes the specified ProtoOAAccountLogoutRes message. Does not implicitly {@link ProtoOAAccountLogoutRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAccountLogoutRes
   * @static
   * @param {IProtoOAAccountLogoutRes} message ProtoOAAccountLogoutRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAccountLogoutRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAAccountLogoutRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAccountLogoutRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAccountLogoutRes} ProtoOAAccountLogoutRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAccountLogoutRes.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAccountLogoutRes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAAccountLogoutRes;
})();

$root.ProtoOAAccountDisconnectEvent = (function() {
  /**
   * Properties of a ProtoOAAccountDisconnectEvent.
   * @exports IProtoOAAccountDisconnectEvent
   * @interface IProtoOAAccountDisconnectEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAccountDisconnectEvent payloadType
   * @property {Long} ctidTraderAccountId ProtoOAAccountDisconnectEvent ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAAccountDisconnectEvent.
   * @exports ProtoOAAccountDisconnectEvent
   * @classdesc Event that is sent when the established session for an account is dropped on the server side.
   * A new session must be authorized for the account.
   * @implements IProtoOAAccountDisconnectEvent
   * @constructor
   * @param {IProtoOAAccountDisconnectEvent=} [properties] Properties to set
   */
  function ProtoOAAccountDisconnectEvent(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAccountDisconnectEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAccountDisconnectEvent
   * @instance
   */
  ProtoOAAccountDisconnectEvent.prototype.payloadType = 2164;

  /**
   * ProtoOAAccountDisconnectEvent ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOAAccountDisconnectEvent
   * @instance
   */
  ProtoOAAccountDisconnectEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAAccountDisconnectEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOAAccountDisconnectEvent
   * @static
   * @param {IProtoOAAccountDisconnectEvent=} [properties] Properties to set
   * @returns {ProtoOAAccountDisconnectEvent} ProtoOAAccountDisconnectEvent instance
   */
  ProtoOAAccountDisconnectEvent.create = function create(properties) {
    return new ProtoOAAccountDisconnectEvent(properties);
  };

  /**
   * Encodes the specified ProtoOAAccountDisconnectEvent message. Does not implicitly {@link ProtoOAAccountDisconnectEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAccountDisconnectEvent
   * @static
   * @param {IProtoOAAccountDisconnectEvent} message ProtoOAAccountDisconnectEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAccountDisconnectEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.payloadType != null && message.hasOwnProperty("payloadType"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAAccountDisconnectEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAccountDisconnectEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAccountDisconnectEvent} ProtoOAAccountDisconnectEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAccountDisconnectEvent.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAccountDisconnectEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.int32();
          break;
        case 2:
          message.ctidTraderAccountId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOAAccountDisconnectEvent;
})();

/**
 * ProtoOAPayloadType enum.
 * @exports ProtoOAPayloadType
 * @enum {string}
 * @property {number} PROTO_OA_APPLICATION_AUTH_REQ=2100 PROTO_OA_APPLICATION_AUTH_REQ value
 * @property {number} PROTO_OA_APPLICATION_AUTH_RES=2101 PROTO_OA_APPLICATION_AUTH_RES value
 * @property {number} PROTO_OA_ACCOUNT_AUTH_REQ=2102 PROTO_OA_ACCOUNT_AUTH_REQ value
 * @property {number} PROTO_OA_ACCOUNT_AUTH_RES=2103 PROTO_OA_ACCOUNT_AUTH_RES value
 * @property {number} PROTO_OA_VERSION_REQ=2104 PROTO_OA_VERSION_REQ value
 * @property {number} PROTO_OA_VERSION_RES=2105 PROTO_OA_VERSION_RES value
 * @property {number} PROTO_OA_NEW_ORDER_REQ=2106 PROTO_OA_NEW_ORDER_REQ value
 * @property {number} PROTO_OA_TRAILING_SL_CHANGED_EVENT=2107 PROTO_OA_TRAILING_SL_CHANGED_EVENT value
 * @property {number} PROTO_OA_CANCEL_ORDER_REQ=2108 PROTO_OA_CANCEL_ORDER_REQ value
 * @property {number} PROTO_OA_AMEND_ORDER_REQ=2109 PROTO_OA_AMEND_ORDER_REQ value
 * @property {number} PROTO_OA_AMEND_POSITION_SLTP_REQ=2110 PROTO_OA_AMEND_POSITION_SLTP_REQ value
 * @property {number} PROTO_OA_CLOSE_POSITION_REQ=2111 PROTO_OA_CLOSE_POSITION_REQ value
 * @property {number} PROTO_OA_ASSET_LIST_REQ=2112 PROTO_OA_ASSET_LIST_REQ value
 * @property {number} PROTO_OA_ASSET_LIST_RES=2113 PROTO_OA_ASSET_LIST_RES value
 * @property {number} PROTO_OA_SYMBOLS_LIST_REQ=2114 PROTO_OA_SYMBOLS_LIST_REQ value
 * @property {number} PROTO_OA_SYMBOLS_LIST_RES=2115 PROTO_OA_SYMBOLS_LIST_RES value
 * @property {number} PROTO_OA_SYMBOL_BY_ID_REQ=2116 PROTO_OA_SYMBOL_BY_ID_REQ value
 * @property {number} PROTO_OA_SYMBOL_BY_ID_RES=2117 PROTO_OA_SYMBOL_BY_ID_RES value
 * @property {number} PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ=2118 PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ value
 * @property {number} PROTO_OA_SYMBOLS_FOR_CONVERSION_RES=2119 PROTO_OA_SYMBOLS_FOR_CONVERSION_RES value
 * @property {number} PROTO_OA_SYMBOL_CHANGED_EVENT=2120 PROTO_OA_SYMBOL_CHANGED_EVENT value
 * @property {number} PROTO_OA_TRADER_REQ=2121 PROTO_OA_TRADER_REQ value
 * @property {number} PROTO_OA_TRADER_RES=2122 PROTO_OA_TRADER_RES value
 * @property {number} PROTO_OA_TRADER_UPDATE_EVENT=2123 PROTO_OA_TRADER_UPDATE_EVENT value
 * @property {number} PROTO_OA_RECONCILE_REQ=2124 PROTO_OA_RECONCILE_REQ value
 * @property {number} PROTO_OA_RECONCILE_RES=2125 PROTO_OA_RECONCILE_RES value
 * @property {number} PROTO_OA_EXECUTION_EVENT=2126 PROTO_OA_EXECUTION_EVENT value
 * @property {number} PROTO_OA_SUBSCRIBE_SPOTS_REQ=2127 PROTO_OA_SUBSCRIBE_SPOTS_REQ value
 * @property {number} PROTO_OA_SUBSCRIBE_SPOTS_RES=2128 PROTO_OA_SUBSCRIBE_SPOTS_RES value
 * @property {number} PROTO_OA_UNSUBSCRIBE_SPOTS_REQ=2129 PROTO_OA_UNSUBSCRIBE_SPOTS_REQ value
 * @property {number} PROTO_OA_UNSUBSCRIBE_SPOTS_RES=2130 PROTO_OA_UNSUBSCRIBE_SPOTS_RES value
 * @property {number} PROTO_OA_SPOT_EVENT=2131 PROTO_OA_SPOT_EVENT value
 * @property {number} PROTO_OA_ORDER_ERROR_EVENT=2132 PROTO_OA_ORDER_ERROR_EVENT value
 * @property {number} PROTO_OA_DEAL_LIST_REQ=2133 PROTO_OA_DEAL_LIST_REQ value
 * @property {number} PROTO_OA_DEAL_LIST_RES=2134 PROTO_OA_DEAL_LIST_RES value
 * @property {number} PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ=2135 PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ value
 * @property {number} PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ=2136 PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ value
 * @property {number} PROTO_OA_GET_TRENDBARS_REQ=2137 PROTO_OA_GET_TRENDBARS_REQ value
 * @property {number} PROTO_OA_GET_TRENDBARS_RES=2138 PROTO_OA_GET_TRENDBARS_RES value
 * @property {number} PROTO_OA_EXPECTED_MARGIN_REQ=2139 PROTO_OA_EXPECTED_MARGIN_REQ value
 * @property {number} PROTO_OA_EXPECTED_MARGIN_RES=2140 PROTO_OA_EXPECTED_MARGIN_RES value
 * @property {number} PROTO_OA_MARGIN_CHANGED_EVENT=2141 PROTO_OA_MARGIN_CHANGED_EVENT value
 * @property {number} PROTO_OA_ERROR_RES=2142 PROTO_OA_ERROR_RES value
 * @property {number} PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ=2143 PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ value
 * @property {number} PROTO_OA_CASH_FLOW_HISTORY_LIST_RES=2144 PROTO_OA_CASH_FLOW_HISTORY_LIST_RES value
 * @property {number} PROTO_OA_GET_TICKDATA_REQ=2145 PROTO_OA_GET_TICKDATA_REQ value
 * @property {number} PROTO_OA_GET_TICKDATA_RES=2146 PROTO_OA_GET_TICKDATA_RES value
 * @property {number} PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT=2147 PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT value
 * @property {number} PROTO_OA_CLIENT_DISCONNECT_EVENT=2148 PROTO_OA_CLIENT_DISCONNECT_EVENT value
 * @property {number} PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ=2149 PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ value
 * @property {number} PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES=2150 PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES value
 * @property {number} PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ=2151 PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ value
 * @property {number} PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES=2152 PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES value
 * @property {number} PROTO_OA_ASSET_CLASS_LIST_REQ=2153 PROTO_OA_ASSET_CLASS_LIST_REQ value
 * @property {number} PROTO_OA_ASSET_CLASS_LIST_RES=2154 PROTO_OA_ASSET_CLASS_LIST_RES value
 * @property {number} PROTO_OA_DEPTH_EVENT=2155 PROTO_OA_DEPTH_EVENT value
 * @property {number} PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ=2156 PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ value
 * @property {number} PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES=2157 PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES value
 * @property {number} PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ=2158 PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ value
 * @property {number} PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES=2159 PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES value
 * @property {number} PROTO_OA_SYMBOL_CATEGORY_REQ=2160 PROTO_OA_SYMBOL_CATEGORY_REQ value
 * @property {number} PROTO_OA_SYMBOL_CATEGORY_RES=2161 PROTO_OA_SYMBOL_CATEGORY_RES value
 * @property {number} PROTO_OA_ACCOUNT_LOGOUT_REQ=2162 PROTO_OA_ACCOUNT_LOGOUT_REQ value
 * @property {number} PROTO_OA_ACCOUNT_LOGOUT_RES=2163 PROTO_OA_ACCOUNT_LOGOUT_RES value
 * @property {number} PROTO_OA_ACCOUNT_DISCONNECT_EVENT=2164 PROTO_OA_ACCOUNT_DISCONNECT_EVENT value
 */
$root.ProtoOAPayloadType = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[2100] = "PROTO_OA_APPLICATION_AUTH_REQ")] = 2100;
  values[(valuesById[2101] = "PROTO_OA_APPLICATION_AUTH_RES")] = 2101;
  values[(valuesById[2102] = "PROTO_OA_ACCOUNT_AUTH_REQ")] = 2102;
  values[(valuesById[2103] = "PROTO_OA_ACCOUNT_AUTH_RES")] = 2103;
  values[(valuesById[2104] = "PROTO_OA_VERSION_REQ")] = 2104;
  values[(valuesById[2105] = "PROTO_OA_VERSION_RES")] = 2105;
  values[(valuesById[2106] = "PROTO_OA_NEW_ORDER_REQ")] = 2106;
  values[(valuesById[2107] = "PROTO_OA_TRAILING_SL_CHANGED_EVENT")] = 2107;
  values[(valuesById[2108] = "PROTO_OA_CANCEL_ORDER_REQ")] = 2108;
  values[(valuesById[2109] = "PROTO_OA_AMEND_ORDER_REQ")] = 2109;
  values[(valuesById[2110] = "PROTO_OA_AMEND_POSITION_SLTP_REQ")] = 2110;
  values[(valuesById[2111] = "PROTO_OA_CLOSE_POSITION_REQ")] = 2111;
  values[(valuesById[2112] = "PROTO_OA_ASSET_LIST_REQ")] = 2112;
  values[(valuesById[2113] = "PROTO_OA_ASSET_LIST_RES")] = 2113;
  values[(valuesById[2114] = "PROTO_OA_SYMBOLS_LIST_REQ")] = 2114;
  values[(valuesById[2115] = "PROTO_OA_SYMBOLS_LIST_RES")] = 2115;
  values[(valuesById[2116] = "PROTO_OA_SYMBOL_BY_ID_REQ")] = 2116;
  values[(valuesById[2117] = "PROTO_OA_SYMBOL_BY_ID_RES")] = 2117;
  values[(valuesById[2118] = "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ")] = 2118;
  values[(valuesById[2119] = "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES")] = 2119;
  values[(valuesById[2120] = "PROTO_OA_SYMBOL_CHANGED_EVENT")] = 2120;
  values[(valuesById[2121] = "PROTO_OA_TRADER_REQ")] = 2121;
  values[(valuesById[2122] = "PROTO_OA_TRADER_RES")] = 2122;
  values[(valuesById[2123] = "PROTO_OA_TRADER_UPDATE_EVENT")] = 2123;
  values[(valuesById[2124] = "PROTO_OA_RECONCILE_REQ")] = 2124;
  values[(valuesById[2125] = "PROTO_OA_RECONCILE_RES")] = 2125;
  values[(valuesById[2126] = "PROTO_OA_EXECUTION_EVENT")] = 2126;
  values[(valuesById[2127] = "PROTO_OA_SUBSCRIBE_SPOTS_REQ")] = 2127;
  values[(valuesById[2128] = "PROTO_OA_SUBSCRIBE_SPOTS_RES")] = 2128;
  values[(valuesById[2129] = "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ")] = 2129;
  values[(valuesById[2130] = "PROTO_OA_UNSUBSCRIBE_SPOTS_RES")] = 2130;
  values[(valuesById[2131] = "PROTO_OA_SPOT_EVENT")] = 2131;
  values[(valuesById[2132] = "PROTO_OA_ORDER_ERROR_EVENT")] = 2132;
  values[(valuesById[2133] = "PROTO_OA_DEAL_LIST_REQ")] = 2133;
  values[(valuesById[2134] = "PROTO_OA_DEAL_LIST_RES")] = 2134;
  values[(valuesById[2135] = "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ")] = 2135;
  values[(valuesById[2136] = "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ")] = 2136;
  values[(valuesById[2137] = "PROTO_OA_GET_TRENDBARS_REQ")] = 2137;
  values[(valuesById[2138] = "PROTO_OA_GET_TRENDBARS_RES")] = 2138;
  values[(valuesById[2139] = "PROTO_OA_EXPECTED_MARGIN_REQ")] = 2139;
  values[(valuesById[2140] = "PROTO_OA_EXPECTED_MARGIN_RES")] = 2140;
  values[(valuesById[2141] = "PROTO_OA_MARGIN_CHANGED_EVENT")] = 2141;
  values[(valuesById[2142] = "PROTO_OA_ERROR_RES")] = 2142;
  values[(valuesById[2143] = "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ")] = 2143;
  values[(valuesById[2144] = "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES")] = 2144;
  values[(valuesById[2145] = "PROTO_OA_GET_TICKDATA_REQ")] = 2145;
  values[(valuesById[2146] = "PROTO_OA_GET_TICKDATA_RES")] = 2146;
  values[
    (valuesById[2147] = "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT")
  ] = 2147;
  values[(valuesById[2148] = "PROTO_OA_CLIENT_DISCONNECT_EVENT")] = 2148;
  values[
    (valuesById[2149] = "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ")
  ] = 2149;
  values[
    (valuesById[2150] = "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES")
  ] = 2150;
  values[(valuesById[2151] = "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ")] = 2151;
  values[(valuesById[2152] = "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES")] = 2152;
  values[(valuesById[2153] = "PROTO_OA_ASSET_CLASS_LIST_REQ")] = 2153;
  values[(valuesById[2154] = "PROTO_OA_ASSET_CLASS_LIST_RES")] = 2154;
  values[(valuesById[2155] = "PROTO_OA_DEPTH_EVENT")] = 2155;
  values[(valuesById[2156] = "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ")] = 2156;
  values[(valuesById[2157] = "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES")] = 2157;
  values[(valuesById[2158] = "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ")] = 2158;
  values[(valuesById[2159] = "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES")] = 2159;
  values[(valuesById[2160] = "PROTO_OA_SYMBOL_CATEGORY_REQ")] = 2160;
  values[(valuesById[2161] = "PROTO_OA_SYMBOL_CATEGORY_RES")] = 2161;
  values[(valuesById[2162] = "PROTO_OA_ACCOUNT_LOGOUT_REQ")] = 2162;
  values[(valuesById[2163] = "PROTO_OA_ACCOUNT_LOGOUT_RES")] = 2163;
  values[(valuesById[2164] = "PROTO_OA_ACCOUNT_DISCONNECT_EVENT")] = 2164;
  return values;
})();

$root.ProtoOAAsset = (function() {
  /**
   * Properties of a ProtoOAAsset.
   * @exports IProtoOAAsset
   * @interface IProtoOAAsset
   * @property {Long} assetId ProtoOAAsset assetId
   * @property {string} name ProtoOAAsset name
   * @property {string|null} [displayName] ProtoOAAsset displayName
   */

  /**
   * Constructs a new ProtoOAAsset.
   * @exports ProtoOAAsset
   * @classdesc Asset entity.
   * @implements IProtoOAAsset
   * @constructor
   * @param {IProtoOAAsset=} [properties] Properties to set
   */
  function ProtoOAAsset(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAsset assetId.
   * @member {Long} assetId
   * @memberof ProtoOAAsset
   * @instance
   */
  ProtoOAAsset.prototype.assetId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAsset name.
   * @member {string} name
   * @memberof ProtoOAAsset
   * @instance
   */
  ProtoOAAsset.prototype.name = "";

  /**
   * ProtoOAAsset displayName.
   * @member {string} displayName
   * @memberof ProtoOAAsset
   * @instance
   */
  ProtoOAAsset.prototype.displayName = "";

  /**
   * Creates a new ProtoOAAsset instance using the specified properties.
   * @function create
   * @memberof ProtoOAAsset
   * @static
   * @param {IProtoOAAsset=} [properties] Properties to set
   * @returns {ProtoOAAsset} ProtoOAAsset instance
   */
  ProtoOAAsset.create = function create(properties) {
    return new ProtoOAAsset(properties);
  };

  /**
   * Encodes the specified ProtoOAAsset message. Does not implicitly {@link ProtoOAAsset.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAsset
   * @static
   * @param {IProtoOAAsset} message ProtoOAAsset message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAsset.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.assetId);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
    if (message.displayName != null && message.hasOwnProperty("displayName"))
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.displayName);
    return writer;
  };

  /**
   * Decodes a ProtoOAAsset message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAsset
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAsset} ProtoOAAsset
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAsset.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAsset();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.int64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("assetId"))
      throw $util.ProtocolError("missing required 'assetId'", {
        instance: message
      });
    if (!message.hasOwnProperty("name"))
      throw $util.ProtocolError("missing required 'name'", {
        instance: message
      });
    return message;
  };

  return ProtoOAAsset;
})();

$root.ProtoOASymbol = (function() {
  /**
   * Properties of a ProtoOASymbol.
   * @exports IProtoOASymbol
   * @interface IProtoOASymbol
   * @property {Long} symbolId ProtoOASymbol symbolId
   * @property {number} digits ProtoOASymbol digits
   * @property {number} pipPosition ProtoOASymbol pipPosition
   * @property {boolean|null} [enableShortSelling] ProtoOASymbol enableShortSelling
   * @property {boolean|null} [guaranteedStopLoss] ProtoOASymbol guaranteedStopLoss
   * @property {ProtoOADayOfWeek|null} [swapRollover3Days] ProtoOASymbol swapRollover3Days
   * @property {number|null} [swapLong] ProtoOASymbol swapLong
   * @property {number|null} [swapShort] ProtoOASymbol swapShort
   * @property {Long|null} [maxVolume] ProtoOASymbol maxVolume
   * @property {Long|null} [minVolume] ProtoOASymbol minVolume
   * @property {Long|null} [stepVolume] ProtoOASymbol stepVolume
   * @property {Long|null} [maxExposure] ProtoOASymbol maxExposure
   * @property {Array.<IProtoOAInterval>|null} [schedule] ProtoOASymbol schedule
   * @property {Long} commission ProtoOASymbol commission
   * @property {ProtoOACommissionType|null} [commissionType] ProtoOASymbol commissionType
   * @property {number|null} [slDistance] ProtoOASymbol slDistance
   * @property {number|null} [tpDistance] ProtoOASymbol tpDistance
   * @property {number|null} [gslDistance] ProtoOASymbol gslDistance
   * @property {Long|null} [gslCharge] ProtoOASymbol gslCharge
   * @property {ProtoOASymbolDistanceType|null} [distanceSetIn] ProtoOASymbol distanceSetIn
   * @property {Long|null} [minCommission] ProtoOASymbol minCommission
   * @property {ProtoOAMinCommissionType|null} [minCommissionType] ProtoOASymbol minCommissionType
   * @property {string|null} [minCommissionAsset] ProtoOASymbol minCommissionAsset
   * @property {Long|null} [rolloverCommission] ProtoOASymbol rolloverCommission
   * @property {number|null} [skipRolloverDays] ProtoOASymbol skipRolloverDays
   * @property {string|null} [scheduleTimeZone] ProtoOASymbol scheduleTimeZone
   * @property {ProtoOATradingMode|null} [tradingMode] ProtoOASymbol tradingMode
   * @property {ProtoOADayOfWeek|null} [rolloverCommission3Days] ProtoOASymbol rolloverCommission3Days
   */

  /**
   * Constructs a new ProtoOASymbol.
   * @exports ProtoOASymbol
   * @classdesc Trading symbol entity.
   * @implements IProtoOASymbol
   * @constructor
   * @param {IProtoOASymbol=} [properties] Properties to set
   */
  function ProtoOASymbol(properties) {
    this.schedule = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbol symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol digits.
   * @member {number} digits
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.digits = 0;

  /**
   * ProtoOASymbol pipPosition.
   * @member {number} pipPosition
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.pipPosition = 0;

  /**
   * ProtoOASymbol enableShortSelling.
   * @member {boolean} enableShortSelling
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.enableShortSelling = false;

  /**
   * ProtoOASymbol guaranteedStopLoss.
   * @member {boolean} guaranteedStopLoss
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.guaranteedStopLoss = false;

  /**
   * ProtoOASymbol swapRollover3Days.
   * @member {ProtoOADayOfWeek} swapRollover3Days
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.swapRollover3Days = 1;

  /**
   * ProtoOASymbol swapLong.
   * @member {number} swapLong
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.swapLong = 0;

  /**
   * ProtoOASymbol swapShort.
   * @member {number} swapShort
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.swapShort = 0;

  /**
   * ProtoOASymbol maxVolume.
   * @member {Long} maxVolume
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.maxVolume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol minVolume.
   * @member {Long} minVolume
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.minVolume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol stepVolume.
   * @member {Long} stepVolume
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.stepVolume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol maxExposure.
   * @member {Long} maxExposure
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.maxExposure = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOASymbol schedule.
   * @member {Array.<IProtoOAInterval>} schedule
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.schedule = $util.emptyArray;

  /**
   * ProtoOASymbol commission.
   * @member {Long} commission
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.commission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol commissionType.
   * @member {ProtoOACommissionType} commissionType
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.commissionType = 1;

  /**
   * ProtoOASymbol slDistance.
   * @member {number} slDistance
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.slDistance = 0;

  /**
   * ProtoOASymbol tpDistance.
   * @member {number} tpDistance
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.tpDistance = 0;

  /**
   * ProtoOASymbol gslDistance.
   * @member {number} gslDistance
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.gslDistance = 0;

  /**
   * ProtoOASymbol gslCharge.
   * @member {Long} gslCharge
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.gslCharge = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol distanceSetIn.
   * @member {ProtoOASymbolDistanceType} distanceSetIn
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.distanceSetIn = 1;

  /**
   * ProtoOASymbol minCommission.
   * @member {Long} minCommission
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.minCommission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol minCommissionType.
   * @member {ProtoOAMinCommissionType} minCommissionType
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.minCommissionType = 1;

  /**
   * ProtoOASymbol minCommissionAsset.
   * @member {string} minCommissionAsset
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.minCommissionAsset = "USD";

  /**
   * ProtoOASymbol rolloverCommission.
   * @member {Long} rolloverCommission
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.rolloverCommission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol skipRolloverDays.
   * @member {number} skipRolloverDays
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.skipRolloverDays = 0;

  /**
   * ProtoOASymbol scheduleTimeZone.
   * @member {string} scheduleTimeZone
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.scheduleTimeZone = "";

  /**
   * ProtoOASymbol tradingMode.
   * @member {ProtoOATradingMode} tradingMode
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.tradingMode = 0;

  /**
   * ProtoOASymbol rolloverCommission3Days.
   * @member {ProtoOADayOfWeek} rolloverCommission3Days
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.rolloverCommission3Days = 1;

  /**
   * Creates a new ProtoOASymbol instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbol
   * @static
   * @param {IProtoOASymbol=} [properties] Properties to set
   * @returns {ProtoOASymbol} ProtoOASymbol instance
   */
  ProtoOASymbol.create = function create(properties) {
    return new ProtoOASymbol(properties);
  };

  /**
   * Encodes the specified ProtoOASymbol message. Does not implicitly {@link ProtoOASymbol.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbol
   * @static
   * @param {IProtoOASymbol} message ProtoOASymbol message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbol.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.symbolId);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.digits);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.pipPosition);
    if (
      message.enableShortSelling != null &&
      message.hasOwnProperty("enableShortSelling")
    )
      writer
        .uint32(/* id 4, wireType 0 =*/ 32)
        .bool(message.enableShortSelling);
    if (
      message.guaranteedStopLoss != null &&
      message.hasOwnProperty("guaranteedStopLoss")
    )
      writer
        .uint32(/* id 5, wireType 0 =*/ 40)
        .bool(message.guaranteedStopLoss);
    if (
      message.swapRollover3Days != null &&
      message.hasOwnProperty("swapRollover3Days")
    )
      writer
        .uint32(/* id 6, wireType 0 =*/ 48)
        .int32(message.swapRollover3Days);
    if (message.swapLong != null && message.hasOwnProperty("swapLong"))
      writer.uint32(/* id 7, wireType 1 =*/ 57).double(message.swapLong);
    if (message.swapShort != null && message.hasOwnProperty("swapShort"))
      writer.uint32(/* id 8, wireType 1 =*/ 65).double(message.swapShort);
    if (message.maxVolume != null && message.hasOwnProperty("maxVolume"))
      writer.uint32(/* id 9, wireType 0 =*/ 72).int64(message.maxVolume);
    if (message.minVolume != null && message.hasOwnProperty("minVolume"))
      writer.uint32(/* id 10, wireType 0 =*/ 80).int64(message.minVolume);
    if (message.stepVolume != null && message.hasOwnProperty("stepVolume"))
      writer.uint32(/* id 11, wireType 0 =*/ 88).int64(message.stepVolume);
    if (message.maxExposure != null && message.hasOwnProperty("maxExposure"))
      writer.uint32(/* id 12, wireType 0 =*/ 96).uint64(message.maxExposure);
    if (message.schedule != null && message.schedule.length)
      for (var i = 0; i < message.schedule.length; ++i)
        $root.ProtoOAInterval.encode(
          message.schedule[i],
          writer.uint32(/* id 13, wireType 2 =*/ 106).fork()
        ).ldelim();
    writer.uint32(/* id 14, wireType 0 =*/ 112).int64(message.commission);
    if (
      message.commissionType != null &&
      message.hasOwnProperty("commissionType")
    )
      writer.uint32(/* id 15, wireType 0 =*/ 120).int32(message.commissionType);
    if (message.slDistance != null && message.hasOwnProperty("slDistance"))
      writer.uint32(/* id 16, wireType 0 =*/ 128).uint32(message.slDistance);
    if (message.tpDistance != null && message.hasOwnProperty("tpDistance"))
      writer.uint32(/* id 17, wireType 0 =*/ 136).uint32(message.tpDistance);
    if (message.gslDistance != null && message.hasOwnProperty("gslDistance"))
      writer.uint32(/* id 18, wireType 0 =*/ 144).uint32(message.gslDistance);
    if (message.gslCharge != null && message.hasOwnProperty("gslCharge"))
      writer.uint32(/* id 19, wireType 0 =*/ 152).int64(message.gslCharge);
    if (
      message.distanceSetIn != null &&
      message.hasOwnProperty("distanceSetIn")
    )
      writer.uint32(/* id 20, wireType 0 =*/ 160).int32(message.distanceSetIn);
    if (
      message.minCommission != null &&
      message.hasOwnProperty("minCommission")
    )
      writer.uint32(/* id 21, wireType 0 =*/ 168).int64(message.minCommission);
    if (
      message.minCommissionType != null &&
      message.hasOwnProperty("minCommissionType")
    )
      writer
        .uint32(/* id 22, wireType 0 =*/ 176)
        .int32(message.minCommissionType);
    if (
      message.minCommissionAsset != null &&
      message.hasOwnProperty("minCommissionAsset")
    )
      writer
        .uint32(/* id 23, wireType 2 =*/ 186)
        .string(message.minCommissionAsset);
    if (
      message.rolloverCommission != null &&
      message.hasOwnProperty("rolloverCommission")
    )
      writer
        .uint32(/* id 24, wireType 0 =*/ 192)
        .int64(message.rolloverCommission);
    if (
      message.skipRolloverDays != null &&
      message.hasOwnProperty("skipRolloverDays")
    )
      writer
        .uint32(/* id 25, wireType 0 =*/ 200)
        .int32(message.skipRolloverDays);
    if (
      message.scheduleTimeZone != null &&
      message.hasOwnProperty("scheduleTimeZone")
    )
      writer
        .uint32(/* id 26, wireType 2 =*/ 210)
        .string(message.scheduleTimeZone);
    if (message.tradingMode != null && message.hasOwnProperty("tradingMode"))
      writer.uint32(/* id 27, wireType 0 =*/ 216).int32(message.tradingMode);
    if (
      message.rolloverCommission3Days != null &&
      message.hasOwnProperty("rolloverCommission3Days")
    )
      writer
        .uint32(/* id 28, wireType 0 =*/ 224)
        .int32(message.rolloverCommission3Days);
    return writer;
  };

  /**
   * Decodes a ProtoOASymbol message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbol
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbol} ProtoOASymbol
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbol.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbol();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbolId = reader.int64();
          break;
        case 2:
          message.digits = reader.int32();
          break;
        case 3:
          message.pipPosition = reader.int32();
          break;
        case 4:
          message.enableShortSelling = reader.bool();
          break;
        case 5:
          message.guaranteedStopLoss = reader.bool();
          break;
        case 6:
          message.swapRollover3Days = reader.int32();
          break;
        case 7:
          message.swapLong = reader.double();
          break;
        case 8:
          message.swapShort = reader.double();
          break;
        case 9:
          message.maxVolume = reader.int64();
          break;
        case 10:
          message.minVolume = reader.int64();
          break;
        case 11:
          message.stepVolume = reader.int64();
          break;
        case 12:
          message.maxExposure = reader.uint64();
          break;
        case 13:
          if (!(message.schedule && message.schedule.length))
            message.schedule = [];
          message.schedule.push(
            $root.ProtoOAInterval.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.commission = reader.int64();
          break;
        case 15:
          message.commissionType = reader.int32();
          break;
        case 16:
          message.slDistance = reader.uint32();
          break;
        case 17:
          message.tpDistance = reader.uint32();
          break;
        case 18:
          message.gslDistance = reader.uint32();
          break;
        case 19:
          message.gslCharge = reader.int64();
          break;
        case 20:
          message.distanceSetIn = reader.int32();
          break;
        case 21:
          message.minCommission = reader.int64();
          break;
        case 22:
          message.minCommissionType = reader.int32();
          break;
        case 23:
          message.minCommissionAsset = reader.string();
          break;
        case 24:
          message.rolloverCommission = reader.int64();
          break;
        case 25:
          message.skipRolloverDays = reader.int32();
          break;
        case 26:
          message.scheduleTimeZone = reader.string();
          break;
        case 27:
          message.tradingMode = reader.int32();
          break;
        case 28:
          message.rolloverCommission3Days = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message
      });
    if (!message.hasOwnProperty("digits"))
      throw $util.ProtocolError("missing required 'digits'", {
        instance: message
      });
    if (!message.hasOwnProperty("pipPosition"))
      throw $util.ProtocolError("missing required 'pipPosition'", {
        instance: message
      });
    if (!message.hasOwnProperty("commission"))
      throw $util.ProtocolError("missing required 'commission'", {
        instance: message
      });
    return message;
  };

  return ProtoOASymbol;
})();

$root.ProtoOALightSymbol = (function() {
  /**
   * Properties of a ProtoOALightSymbol.
   * @exports IProtoOALightSymbol
   * @interface IProtoOALightSymbol
   * @property {Long} symbolId ProtoOALightSymbol symbolId
   * @property {string|null} [symbolName] ProtoOALightSymbol symbolName
   * @property {boolean|null} [enabled] ProtoOALightSymbol enabled
   * @property {Long|null} [baseAssetId] ProtoOALightSymbol baseAssetId
   * @property {Long|null} [quoteAssetId] ProtoOALightSymbol quoteAssetId
   * @property {Long|null} [symbolCategoryId] ProtoOALightSymbol symbolCategoryId
   * @property {string|null} [description] ProtoOALightSymbol description
   */

  /**
   * Constructs a new ProtoOALightSymbol.
   * @exports ProtoOALightSymbol
   * @classdesc Lightweight symbol entity.
   * @implements IProtoOALightSymbol
   * @constructor
   * @param {IProtoOALightSymbol=} [properties] Properties to set
   */
  function ProtoOALightSymbol(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOALightSymbol symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOALightSymbol symbolName.
   * @member {string} symbolName
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.symbolName = "";

  /**
   * ProtoOALightSymbol enabled.
   * @member {boolean} enabled
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.enabled = false;

  /**
   * ProtoOALightSymbol baseAssetId.
   * @member {Long} baseAssetId
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.baseAssetId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOALightSymbol quoteAssetId.
   * @member {Long} quoteAssetId
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.quoteAssetId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOALightSymbol symbolCategoryId.
   * @member {Long} symbolCategoryId
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.symbolCategoryId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOALightSymbol description.
   * @member {string} description
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.description = "";

  /**
   * Creates a new ProtoOALightSymbol instance using the specified properties.
   * @function create
   * @memberof ProtoOALightSymbol
   * @static
   * @param {IProtoOALightSymbol=} [properties] Properties to set
   * @returns {ProtoOALightSymbol} ProtoOALightSymbol instance
   */
  ProtoOALightSymbol.create = function create(properties) {
    return new ProtoOALightSymbol(properties);
  };

  /**
   * Encodes the specified ProtoOALightSymbol message. Does not implicitly {@link ProtoOALightSymbol.verify|verify} messages.
   * @function encode
   * @memberof ProtoOALightSymbol
   * @static
   * @param {IProtoOALightSymbol} message ProtoOALightSymbol message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOALightSymbol.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.symbolId);
    if (message.symbolName != null && message.hasOwnProperty("symbolName"))
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.symbolName);
    if (message.enabled != null && message.hasOwnProperty("enabled"))
      writer.uint32(/* id 3, wireType 0 =*/ 24).bool(message.enabled);
    if (message.baseAssetId != null && message.hasOwnProperty("baseAssetId"))
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.baseAssetId);
    if (message.quoteAssetId != null && message.hasOwnProperty("quoteAssetId"))
      writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.quoteAssetId);
    if (
      message.symbolCategoryId != null &&
      message.hasOwnProperty("symbolCategoryId")
    )
      writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.symbolCategoryId);
    if (message.description != null && message.hasOwnProperty("description"))
      writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.description);
    return writer;
  };

  /**
   * Decodes a ProtoOALightSymbol message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOALightSymbol
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOALightSymbol} ProtoOALightSymbol
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOALightSymbol.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOALightSymbol();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbolId = reader.int64();
          break;
        case 2:
          message.symbolName = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.baseAssetId = reader.int64();
          break;
        case 5:
          message.quoteAssetId = reader.int64();
          break;
        case 6:
          message.symbolCategoryId = reader.int64();
          break;
        case 7:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message
      });
    return message;
  };

  return ProtoOALightSymbol;
})();

$root.ProtoOASymbolCategory = (function() {
  /**
   * Properties of a ProtoOASymbolCategory.
   * @exports IProtoOASymbolCategory
   * @interface IProtoOASymbolCategory
   * @property {Long} id ProtoOASymbolCategory id
   * @property {Long} assetClassId ProtoOASymbolCategory assetClassId
   * @property {string} name ProtoOASymbolCategory name
   */

  /**
   * Constructs a new ProtoOASymbolCategory.
   * @exports ProtoOASymbolCategory
   * @classdesc Symbol category entity.
   * @implements IProtoOASymbolCategory
   * @constructor
   * @param {IProtoOASymbolCategory=} [properties] Properties to set
   */
  function ProtoOASymbolCategory(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolCategory id.
   * @member {Long} id
   * @memberof ProtoOASymbolCategory
   * @instance
   */
  ProtoOASymbolCategory.prototype.id = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolCategory assetClassId.
   * @member {Long} assetClassId
   * @memberof ProtoOASymbolCategory
   * @instance
   */
  ProtoOASymbolCategory.prototype.assetClassId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolCategory name.
   * @member {string} name
   * @memberof ProtoOASymbolCategory
   * @instance
   */
  ProtoOASymbolCategory.prototype.name = "";

  /**
   * Creates a new ProtoOASymbolCategory instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolCategory
   * @static
   * @param {IProtoOASymbolCategory=} [properties] Properties to set
   * @returns {ProtoOASymbolCategory} ProtoOASymbolCategory instance
   */
  ProtoOASymbolCategory.create = function create(properties) {
    return new ProtoOASymbolCategory(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolCategory message. Does not implicitly {@link ProtoOASymbolCategory.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolCategory
   * @static
   * @param {IProtoOASymbolCategory} message ProtoOASymbolCategory message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolCategory.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.id);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.assetClassId);
    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.name);
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolCategory message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolCategory
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolCategory} ProtoOASymbolCategory
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolCategory.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolCategory();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64();
          break;
        case 2:
          message.assetClassId = reader.int64();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("id"))
      throw $util.ProtocolError("missing required 'id'", { instance: message });
    if (!message.hasOwnProperty("assetClassId"))
      throw $util.ProtocolError("missing required 'assetClassId'", {
        instance: message
      });
    if (!message.hasOwnProperty("name"))
      throw $util.ProtocolError("missing required 'name'", {
        instance: message
      });
    return message;
  };

  return ProtoOASymbolCategory;
})();

/**
 * ProtoOADayOfWeek enum.
 * @exports ProtoOADayOfWeek
 * @enum {string}
 * @property {number} NONE=0 NONE value
 * @property {number} MONDAY=1 MONDAY value
 * @property {number} TUESDAY=2 TUESDAY value
 * @property {number} WEDNESDAY=3 WEDNESDAY value
 * @property {number} THURSDAY=4 THURSDAY value
 * @property {number} FRIDAY=5 FRIDAY value
 * @property {number} SATURDAY=6 SATURDAY value
 * @property {number} SUNDAY=7 SUNDAY value
 */
$root.ProtoOADayOfWeek = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "NONE")] = 0;
  values[(valuesById[1] = "MONDAY")] = 1;
  values[(valuesById[2] = "TUESDAY")] = 2;
  values[(valuesById[3] = "WEDNESDAY")] = 3;
  values[(valuesById[4] = "THURSDAY")] = 4;
  values[(valuesById[5] = "FRIDAY")] = 5;
  values[(valuesById[6] = "SATURDAY")] = 6;
  values[(valuesById[7] = "SUNDAY")] = 7;
  return values;
})();

$root.ProtoOAInterval = (function() {
  /**
   * Properties of a ProtoOAInterval.
   * @exports IProtoOAInterval
   * @interface IProtoOAInterval
   * @property {number} startSecond ProtoOAInterval startSecond
   * @property {number} endSecond ProtoOAInterval endSecond
   */

  /**
   * Constructs a new ProtoOAInterval.
   * @exports ProtoOAInterval
   * @classdesc Symbol trading session entity.
   * @implements IProtoOAInterval
   * @constructor
   * @param {IProtoOAInterval=} [properties] Properties to set
   */
  function ProtoOAInterval(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAInterval startSecond.
   * @member {number} startSecond
   * @memberof ProtoOAInterval
   * @instance
   */
  ProtoOAInterval.prototype.startSecond = 0;

  /**
   * ProtoOAInterval endSecond.
   * @member {number} endSecond
   * @memberof ProtoOAInterval
   * @instance
   */
  ProtoOAInterval.prototype.endSecond = 0;

  /**
   * Creates a new ProtoOAInterval instance using the specified properties.
   * @function create
   * @memberof ProtoOAInterval
   * @static
   * @param {IProtoOAInterval=} [properties] Properties to set
   * @returns {ProtoOAInterval} ProtoOAInterval instance
   */
  ProtoOAInterval.create = function create(properties) {
    return new ProtoOAInterval(properties);
  };

  /**
   * Encodes the specified ProtoOAInterval message. Does not implicitly {@link ProtoOAInterval.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAInterval
   * @static
   * @param {IProtoOAInterval} message ProtoOAInterval message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAInterval.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.startSecond);
    writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.endSecond);
    return writer;
  };

  /**
   * Decodes a ProtoOAInterval message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAInterval
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAInterval} ProtoOAInterval
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAInterval.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAInterval();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.startSecond = reader.uint32();
          break;
        case 4:
          message.endSecond = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("startSecond"))
      throw $util.ProtocolError("missing required 'startSecond'", {
        instance: message
      });
    if (!message.hasOwnProperty("endSecond"))
      throw $util.ProtocolError("missing required 'endSecond'", {
        instance: message
      });
    return message;
  };

  return ProtoOAInterval;
})();

/**
 * Enum for specifying type of trading commission.
 * @exports ProtoOACommissionType
 * @enum {string}
 * @property {number} USD_PER_MIL_USD=1 USD_PER_MIL_USD value
 * @property {number} USD_PER_LOT=2 USD_PER_LOT value
 * @property {number} PERCENTAGE=3 PERCENTAGE value
 * @property {number} QUOTE_CCY_PER_LOT=4 QUOTE_CCY_PER_LOT value
 */
$root.ProtoOACommissionType = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "USD_PER_MIL_USD")] = 1;
  values[(valuesById[2] = "USD_PER_LOT")] = 2;
  values[(valuesById[3] = "PERCENTAGE")] = 3;
  values[(valuesById[4] = "QUOTE_CCY_PER_LOT")] = 4;
  return values;
})();

/**
 * Enum for specifying stop loss and take profit distances.
 * @exports ProtoOASymbolDistanceType
 * @enum {string}
 * @property {number} SYMBOL_DISTANCE_IN_POINTS=1 SYMBOL_DISTANCE_IN_POINTS value
 * @property {number} SYMBOL_DISTANCE_IN_PERCENTAGE=2 SYMBOL_DISTANCE_IN_PERCENTAGE value
 */
$root.ProtoOASymbolDistanceType = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "SYMBOL_DISTANCE_IN_POINTS")] = 1;
  values[(valuesById[2] = "SYMBOL_DISTANCE_IN_PERCENTAGE")] = 2;
  return values;
})();

/**
 * Enum for specifying type of minimum trading commission.
 * @exports ProtoOAMinCommissionType
 * @enum {string}
 * @property {number} CURRENCY=1 CURRENCY value
 * @property {number} QUOTE_CURRENCY=2 QUOTE_CURRENCY value
 */
$root.ProtoOAMinCommissionType = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "CURRENCY")] = 1;
  values[(valuesById[2] = "QUOTE_CURRENCY")] = 2;
  return values;
})();

/**
 * Enum for specifying symbol trading mode.
 * @exports ProtoOATradingMode
 * @enum {string}
 * @property {number} ENABLED=0 ENABLED value
 * @property {number} DISABLED_WITHOUT_PENDINGS_EXECUTION=1 DISABLED_WITHOUT_PENDINGS_EXECUTION value
 * @property {number} DISABLED_WITH_PENDINGS_EXECUTION=2 DISABLED_WITH_PENDINGS_EXECUTION value
 * @property {number} CLOSE_ONLY_MODE=3 CLOSE_ONLY_MODE value
 */
$root.ProtoOATradingMode = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "ENABLED")] = 0;
  values[(valuesById[1] = "DISABLED_WITHOUT_PENDINGS_EXECUTION")] = 1;
  values[(valuesById[2] = "DISABLED_WITH_PENDINGS_EXECUTION")] = 2;
  values[(valuesById[3] = "CLOSE_ONLY_MODE")] = 3;
  return values;
})();

/**
 * Enum for specifying access right for a trader.
 * @exports ProtoOAAccessRights
 * @enum {string}
 * @property {number} FULL_ACCESS=0 FULL_ACCESS value
 * @property {number} CLOSE_ONLY=1 CLOSE_ONLY value
 * @property {number} NO_TRADING=2 NO_TRADING value
 * @property {number} NO_LOGIN=3 NO_LOGIN value
 */
$root.ProtoOAAccessRights = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "FULL_ACCESS")] = 0;
  values[(valuesById[1] = "CLOSE_ONLY")] = 1;
  values[(valuesById[2] = "NO_TRADING")] = 2;
  values[(valuesById[3] = "NO_LOGIN")] = 3;
  return values;
})();

/**
 * Enum for specifying margin calculation type for an account.
 * @exports ProtoOATotalMarginCalculationType
 * @enum {string}
 * @property {number} MAX=0 MAX value
 * @property {number} SUM=1 SUM value
 * @property {number} NET=2 NET value
 */
$root.ProtoOATotalMarginCalculationType = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "MAX")] = 0;
  values[(valuesById[1] = "SUM")] = 1;
  values[(valuesById[2] = "NET")] = 2;
  return values;
})();

/**
 * Enum for specifying type of an account.
 * @exports ProtoOAAccountType
 * @enum {string}
 * @property {number} HEDGED=0 HEDGED value
 * @property {number} NETTED=1 NETTED value
 * @property {number} SPREAD_BETTING=2 SPREAD_BETTING value
 */
$root.ProtoOAAccountType = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "HEDGED")] = 0;
  values[(valuesById[1] = "NETTED")] = 1;
  values[(valuesById[2] = "SPREAD_BETTING")] = 2;
  return values;
})();

$root.ProtoOATrader = (function() {
  /**
   * Properties of a ProtoOATrader.
   * @exports IProtoOATrader
   * @interface IProtoOATrader
   * @property {Long} ctidTraderAccountId ProtoOATrader ctidTraderAccountId
   * @property {Long} balance ProtoOATrader balance
   * @property {Long|null} [balanceVersion] ProtoOATrader balanceVersion
   * @property {Long|null} [managerBonus] ProtoOATrader managerBonus
   * @property {Long|null} [ibBonus] ProtoOATrader ibBonus
   * @property {Long|null} [nonWithdrawableBonus] ProtoOATrader nonWithdrawableBonus
   * @property {ProtoOAAccessRights|null} [accessRights] ProtoOATrader accessRights
   * @property {Long} depositAssetId ProtoOATrader depositAssetId
   * @property {boolean|null} [swapFree] ProtoOATrader swapFree
   * @property {number|null} [leverageInCents] ProtoOATrader leverageInCents
   * @property {ProtoOATotalMarginCalculationType|null} [totalMarginCalculationType] ProtoOATrader totalMarginCalculationType
   * @property {number|null} [maxLeverage] ProtoOATrader maxLeverage
   * @property {boolean|null} [frenchRisk] ProtoOATrader frenchRisk
   * @property {Long|null} [traderLogin] ProtoOATrader traderLogin
   * @property {ProtoOAAccountType|null} [accountType] ProtoOATrader accountType
   * @property {string|null} [brokerName] ProtoOATrader brokerName
   * @property {Long|null} [registrationTimestamp] ProtoOATrader registrationTimestamp
   */

  /**
   * Constructs a new ProtoOATrader.
   * @exports ProtoOATrader
   * @classdesc Trading account entity.
   * @implements IProtoOATrader
   * @constructor
   * @param {IProtoOATrader=} [properties] Properties to set
   */
  function ProtoOATrader(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATrader ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader balance.
   * @member {Long} balance
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.balance = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader balanceVersion.
   * @member {Long} balanceVersion
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.balanceVersion = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader managerBonus.
   * @member {Long} managerBonus
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.managerBonus = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader ibBonus.
   * @member {Long} ibBonus
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.ibBonus = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader nonWithdrawableBonus.
   * @member {Long} nonWithdrawableBonus
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.nonWithdrawableBonus = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader accessRights.
   * @member {ProtoOAAccessRights} accessRights
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.accessRights = 0;

  /**
   * ProtoOATrader depositAssetId.
   * @member {Long} depositAssetId
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.depositAssetId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader swapFree.
   * @member {boolean} swapFree
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.swapFree = false;

  /**
   * ProtoOATrader leverageInCents.
   * @member {number} leverageInCents
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.leverageInCents = 0;

  /**
   * ProtoOATrader totalMarginCalculationType.
   * @member {ProtoOATotalMarginCalculationType} totalMarginCalculationType
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.totalMarginCalculationType = 0;

  /**
   * ProtoOATrader maxLeverage.
   * @member {number} maxLeverage
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.maxLeverage = 0;

  /**
   * ProtoOATrader frenchRisk.
   * @member {boolean} frenchRisk
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.frenchRisk = false;

  /**
   * ProtoOATrader traderLogin.
   * @member {Long} traderLogin
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.traderLogin = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader accountType.
   * @member {ProtoOAAccountType} accountType
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.accountType = 0;

  /**
   * ProtoOATrader brokerName.
   * @member {string} brokerName
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.brokerName = "";

  /**
   * ProtoOATrader registrationTimestamp.
   * @member {Long} registrationTimestamp
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.registrationTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOATrader instance using the specified properties.
   * @function create
   * @memberof ProtoOATrader
   * @static
   * @param {IProtoOATrader=} [properties] Properties to set
   * @returns {ProtoOATrader} ProtoOATrader instance
   */
  ProtoOATrader.create = function create(properties) {
    return new ProtoOATrader(properties);
  };

  /**
   * Encodes the specified ProtoOATrader message. Does not implicitly {@link ProtoOATrader.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATrader
   * @static
   * @param {IProtoOATrader} message ProtoOATrader message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATrader.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.ctidTraderAccountId);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.balance);
    if (
      message.balanceVersion != null &&
      message.hasOwnProperty("balanceVersion")
    )
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.balanceVersion);
    if (message.managerBonus != null && message.hasOwnProperty("managerBonus"))
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.managerBonus);
    if (message.ibBonus != null && message.hasOwnProperty("ibBonus"))
      writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.ibBonus);
    if (
      message.nonWithdrawableBonus != null &&
      message.hasOwnProperty("nonWithdrawableBonus")
    )
      writer
        .uint32(/* id 6, wireType 0 =*/ 48)
        .int64(message.nonWithdrawableBonus);
    if (message.accessRights != null && message.hasOwnProperty("accessRights"))
      writer.uint32(/* id 7, wireType 0 =*/ 56).int32(message.accessRights);
    writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.depositAssetId);
    if (message.swapFree != null && message.hasOwnProperty("swapFree"))
      writer.uint32(/* id 9, wireType 0 =*/ 72).bool(message.swapFree);
    if (
      message.leverageInCents != null &&
      message.hasOwnProperty("leverageInCents")
    )
      writer
        .uint32(/* id 10, wireType 0 =*/ 80)
        .uint32(message.leverageInCents);
    if (
      message.totalMarginCalculationType != null &&
      message.hasOwnProperty("totalMarginCalculationType")
    )
      writer
        .uint32(/* id 11, wireType 0 =*/ 88)
        .int32(message.totalMarginCalculationType);
    if (message.maxLeverage != null && message.hasOwnProperty("maxLeverage"))
      writer.uint32(/* id 12, wireType 0 =*/ 96).uint32(message.maxLeverage);
    if (message.frenchRisk != null && message.hasOwnProperty("frenchRisk"))
      writer.uint32(/* id 13, wireType 0 =*/ 104).bool(message.frenchRisk);
    if (message.traderLogin != null && message.hasOwnProperty("traderLogin"))
      writer.uint32(/* id 14, wireType 0 =*/ 112).int64(message.traderLogin);
    if (message.accountType != null && message.hasOwnProperty("accountType"))
      writer.uint32(/* id 15, wireType 0 =*/ 120).int32(message.accountType);
    if (message.brokerName != null && message.hasOwnProperty("brokerName"))
      writer.uint32(/* id 16, wireType 2 =*/ 130).string(message.brokerName);
    if (
      message.registrationTimestamp != null &&
      message.hasOwnProperty("registrationTimestamp")
    )
      writer
        .uint32(/* id 17, wireType 0 =*/ 136)
        .int64(message.registrationTimestamp);
    return writer;
  };

  /**
   * Decodes a ProtoOATrader message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATrader
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATrader} ProtoOATrader
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATrader.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATrader();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctidTraderAccountId = reader.int64();
          break;
        case 2:
          message.balance = reader.int64();
          break;
        case 3:
          message.balanceVersion = reader.int64();
          break;
        case 4:
          message.managerBonus = reader.int64();
          break;
        case 5:
          message.ibBonus = reader.int64();
          break;
        case 6:
          message.nonWithdrawableBonus = reader.int64();
          break;
        case 7:
          message.accessRights = reader.int32();
          break;
        case 8:
          message.depositAssetId = reader.int64();
          break;
        case 9:
          message.swapFree = reader.bool();
          break;
        case 10:
          message.leverageInCents = reader.uint32();
          break;
        case 11:
          message.totalMarginCalculationType = reader.int32();
          break;
        case 12:
          message.maxLeverage = reader.uint32();
          break;
        case 13:
          message.frenchRisk = reader.bool();
          break;
        case 14:
          message.traderLogin = reader.int64();
          break;
        case 15:
          message.accountType = reader.int32();
          break;
        case 16:
          message.brokerName = reader.string();
          break;
        case 17:
          message.registrationTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    if (!message.hasOwnProperty("balance"))
      throw $util.ProtocolError("missing required 'balance'", {
        instance: message
      });
    if (!message.hasOwnProperty("depositAssetId"))
      throw $util.ProtocolError("missing required 'depositAssetId'", {
        instance: message
      });
    return message;
  };

  return ProtoOATrader;
})();

/**
 * Position status ENUM.
 * @exports ProtoOAPositionStatus
 * @enum {string}
 * @property {number} POSITION_STATUS_OPEN=1 POSITION_STATUS_OPEN value
 * @property {number} POSITION_STATUS_CLOSED=2 POSITION_STATUS_CLOSED value
 * @property {number} POSITION_STATUS_CREATED=3 POSITION_STATUS_CREATED value
 * @property {number} POSITION_STATUS_ERROR=4 POSITION_STATUS_ERROR value
 */
$root.ProtoOAPositionStatus = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "POSITION_STATUS_OPEN")] = 1;
  values[(valuesById[2] = "POSITION_STATUS_CLOSED")] = 2;
  values[(valuesById[3] = "POSITION_STATUS_CREATED")] = 3;
  values[(valuesById[4] = "POSITION_STATUS_ERROR")] = 4;
  return values;
})();

/**
 * Trader side ENUM. Used for order, position, deal.
 * @exports ProtoOATradeSide
 * @enum {string}
 * @property {number} BUY=1 BUY value
 * @property {number} SELL=2 SELL value
 */
$root.ProtoOATradeSide = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "BUY")] = 1;
  values[(valuesById[2] = "SELL")] = 2;
  return values;
})();

/**
 * Order type ENUM.
 * @exports ProtoOAOrderType
 * @enum {string}
 * @property {number} MARKET=1 MARKET value
 * @property {number} LIMIT=2 LIMIT value
 * @property {number} STOP=3 STOP value
 * @property {number} STOP_LOSS_TAKE_PROFIT=4 STOP_LOSS_TAKE_PROFIT value
 * @property {number} MARKET_RANGE=5 MARKET_RANGE value
 * @property {number} STOP_LIMIT=6 STOP_LIMIT value
 */
$root.ProtoOAOrderType = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "MARKET")] = 1;
  values[(valuesById[2] = "LIMIT")] = 2;
  values[(valuesById[3] = "STOP")] = 3;
  values[(valuesById[4] = "STOP_LOSS_TAKE_PROFIT")] = 4;
  values[(valuesById[5] = "MARKET_RANGE")] = 5;
  values[(valuesById[6] = "STOP_LIMIT")] = 6;
  return values;
})();

/**
 * Order's time in force ENUM.
 * @exports ProtoOATimeInForce
 * @enum {string}
 * @property {number} GOOD_TILL_DATE=1 GOOD_TILL_DATE value
 * @property {number} GOOD_TILL_CANCEL=2 GOOD_TILL_CANCEL value
 * @property {number} IMMEDIATE_OR_CANCEL=3 IMMEDIATE_OR_CANCEL value
 * @property {number} FILL_OR_KILL=4 FILL_OR_KILL value
 * @property {number} MARKET_ON_OPEN=5 MARKET_ON_OPEN value
 */
$root.ProtoOATimeInForce = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "GOOD_TILL_DATE")] = 1;
  values[(valuesById[2] = "GOOD_TILL_CANCEL")] = 2;
  values[(valuesById[3] = "IMMEDIATE_OR_CANCEL")] = 3;
  values[(valuesById[4] = "FILL_OR_KILL")] = 4;
  values[(valuesById[5] = "MARKET_ON_OPEN")] = 5;
  return values;
})();

/**
 * Order status ENUM.
 * @exports ProtoOAOrderStatus
 * @enum {string}
 * @property {number} ORDER_STATUS_ACCEPTED=1 ORDER_STATUS_ACCEPTED value
 * @property {number} ORDER_STATUS_FILLED=2 ORDER_STATUS_FILLED value
 * @property {number} ORDER_STATUS_REJECTED=3 ORDER_STATUS_REJECTED value
 * @property {number} ORDER_STATUS_EXPIRED=4 ORDER_STATUS_EXPIRED value
 * @property {number} ORDER_STATUS_CANCELLED=5 ORDER_STATUS_CANCELLED value
 */
$root.ProtoOAOrderStatus = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "ORDER_STATUS_ACCEPTED")] = 1;
  values[(valuesById[2] = "ORDER_STATUS_FILLED")] = 2;
  values[(valuesById[3] = "ORDER_STATUS_REJECTED")] = 3;
  values[(valuesById[4] = "ORDER_STATUS_EXPIRED")] = 4;
  values[(valuesById[5] = "ORDER_STATUS_CANCELLED")] = 5;
  return values;
})();

/**
 * Stop Order and Stop Lost triggering method ENUM.
 * @exports ProtoOAOrderTriggerMethod
 * @enum {string}
 * @property {number} TRADE=1 TRADE value
 * @property {number} OPPOSITE=2 OPPOSITE value
 * @property {number} DOUBLE_TRADE=3 DOUBLE_TRADE value
 * @property {number} DOUBLE_OPPOSITE=4 DOUBLE_OPPOSITE value
 */
$root.ProtoOAOrderTriggerMethod = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "TRADE")] = 1;
  values[(valuesById[2] = "OPPOSITE")] = 2;
  values[(valuesById[3] = "DOUBLE_TRADE")] = 3;
  values[(valuesById[4] = "DOUBLE_OPPOSITE")] = 4;
  return values;
})();

$root.ProtoOAPosition = (function() {
  /**
   * Properties of a ProtoOAPosition.
   * @exports IProtoOAPosition
   * @interface IProtoOAPosition
   * @property {Long} positionId ProtoOAPosition positionId
   * @property {IProtoOATradeData} tradeData ProtoOAPosition tradeData
   * @property {ProtoOAPositionStatus} positionStatus ProtoOAPosition positionStatus
   * @property {Long} swap ProtoOAPosition swap
   * @property {number|null} [price] ProtoOAPosition price
   * @property {number|null} [stopLoss] ProtoOAPosition stopLoss
   * @property {number|null} [takeProfit] ProtoOAPosition takeProfit
   * @property {Long|null} [utcLastUpdateTimestamp] ProtoOAPosition utcLastUpdateTimestamp
   * @property {Long|null} [commission] ProtoOAPosition commission
   * @property {number|null} [marginRate] ProtoOAPosition marginRate
   * @property {Long|null} [mirroringCommission] ProtoOAPosition mirroringCommission
   * @property {boolean|null} [guaranteedStopLoss] ProtoOAPosition guaranteedStopLoss
   * @property {Long|null} [usedMargin] ProtoOAPosition usedMargin
   * @property {ProtoOAOrderTriggerMethod|null} [stopLossTriggerMethod] ProtoOAPosition stopLossTriggerMethod
   */

  /**
   * Constructs a new ProtoOAPosition.
   * @exports ProtoOAPosition
   * @classdesc Trade position entity.
   * @implements IProtoOAPosition
   * @constructor
   * @param {IProtoOAPosition=} [properties] Properties to set
   */
  function ProtoOAPosition(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAPosition positionId.
   * @member {Long} positionId
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAPosition tradeData.
   * @member {IProtoOATradeData} tradeData
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.tradeData = null;

  /**
   * ProtoOAPosition positionStatus.
   * @member {ProtoOAPositionStatus} positionStatus
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.positionStatus = 1;

  /**
   * ProtoOAPosition swap.
   * @member {Long} swap
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.swap = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAPosition price.
   * @member {number} price
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.price = 0;

  /**
   * ProtoOAPosition stopLoss.
   * @member {number} stopLoss
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.stopLoss = 0;

  /**
   * ProtoOAPosition takeProfit.
   * @member {number} takeProfit
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.takeProfit = 0;

  /**
   * ProtoOAPosition utcLastUpdateTimestamp.
   * @member {Long} utcLastUpdateTimestamp
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.utcLastUpdateTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAPosition commission.
   * @member {Long} commission
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.commission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAPosition marginRate.
   * @member {number} marginRate
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.marginRate = 0;

  /**
   * ProtoOAPosition mirroringCommission.
   * @member {Long} mirroringCommission
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.mirroringCommission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAPosition guaranteedStopLoss.
   * @member {boolean} guaranteedStopLoss
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.guaranteedStopLoss = false;

  /**
   * ProtoOAPosition usedMargin.
   * @member {Long} usedMargin
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.usedMargin = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOAPosition stopLossTriggerMethod.
   * @member {ProtoOAOrderTriggerMethod} stopLossTriggerMethod
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.stopLossTriggerMethod = 1;

  /**
   * Creates a new ProtoOAPosition instance using the specified properties.
   * @function create
   * @memberof ProtoOAPosition
   * @static
   * @param {IProtoOAPosition=} [properties] Properties to set
   * @returns {ProtoOAPosition} ProtoOAPosition instance
   */
  ProtoOAPosition.create = function create(properties) {
    return new ProtoOAPosition(properties);
  };

  /**
   * Encodes the specified ProtoOAPosition message. Does not implicitly {@link ProtoOAPosition.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAPosition
   * @static
   * @param {IProtoOAPosition} message ProtoOAPosition message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAPosition.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.positionId);
    $root.ProtoOATradeData.encode(
      message.tradeData,
      writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
    ).ldelim();
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.positionStatus);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.swap);
    if (message.price != null && message.hasOwnProperty("price"))
      writer.uint32(/* id 5, wireType 1 =*/ 41).double(message.price);
    if (message.stopLoss != null && message.hasOwnProperty("stopLoss"))
      writer.uint32(/* id 6, wireType 1 =*/ 49).double(message.stopLoss);
    if (message.takeProfit != null && message.hasOwnProperty("takeProfit"))
      writer.uint32(/* id 7, wireType 1 =*/ 57).double(message.takeProfit);
    if (
      message.utcLastUpdateTimestamp != null &&
      message.hasOwnProperty("utcLastUpdateTimestamp")
    )
      writer
        .uint32(/* id 8, wireType 0 =*/ 64)
        .int64(message.utcLastUpdateTimestamp);
    if (message.commission != null && message.hasOwnProperty("commission"))
      writer.uint32(/* id 9, wireType 0 =*/ 72).int64(message.commission);
    if (message.marginRate != null && message.hasOwnProperty("marginRate"))
      writer.uint32(/* id 10, wireType 1 =*/ 81).double(message.marginRate);
    if (
      message.mirroringCommission != null &&
      message.hasOwnProperty("mirroringCommission")
    )
      writer
        .uint32(/* id 11, wireType 0 =*/ 88)
        .int64(message.mirroringCommission);
    if (
      message.guaranteedStopLoss != null &&
      message.hasOwnProperty("guaranteedStopLoss")
    )
      writer
        .uint32(/* id 12, wireType 0 =*/ 96)
        .bool(message.guaranteedStopLoss);
    if (message.usedMargin != null && message.hasOwnProperty("usedMargin"))
      writer.uint32(/* id 13, wireType 0 =*/ 104).uint64(message.usedMargin);
    if (
      message.stopLossTriggerMethod != null &&
      message.hasOwnProperty("stopLossTriggerMethod")
    )
      writer
        .uint32(/* id 14, wireType 0 =*/ 112)
        .int32(message.stopLossTriggerMethod);
    return writer;
  };

  /**
   * Decodes a ProtoOAPosition message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAPosition
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAPosition} ProtoOAPosition
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAPosition.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAPosition();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.int64();
          break;
        case 2:
          message.tradeData = $root.ProtoOATradeData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.positionStatus = reader.int32();
          break;
        case 4:
          message.swap = reader.int64();
          break;
        case 5:
          message.price = reader.double();
          break;
        case 6:
          message.stopLoss = reader.double();
          break;
        case 7:
          message.takeProfit = reader.double();
          break;
        case 8:
          message.utcLastUpdateTimestamp = reader.int64();
          break;
        case 9:
          message.commission = reader.int64();
          break;
        case 10:
          message.marginRate = reader.double();
          break;
        case 11:
          message.mirroringCommission = reader.int64();
          break;
        case 12:
          message.guaranteedStopLoss = reader.bool();
          break;
        case 13:
          message.usedMargin = reader.uint64();
          break;
        case 14:
          message.stopLossTriggerMethod = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("positionId"))
      throw $util.ProtocolError("missing required 'positionId'", {
        instance: message
      });
    if (!message.hasOwnProperty("tradeData"))
      throw $util.ProtocolError("missing required 'tradeData'", {
        instance: message
      });
    if (!message.hasOwnProperty("positionStatus"))
      throw $util.ProtocolError("missing required 'positionStatus'", {
        instance: message
      });
    if (!message.hasOwnProperty("swap"))
      throw $util.ProtocolError("missing required 'swap'", {
        instance: message
      });
    return message;
  };

  return ProtoOAPosition;
})();

$root.ProtoOATradeData = (function() {
  /**
   * Properties of a ProtoOATradeData.
   * @exports IProtoOATradeData
   * @interface IProtoOATradeData
   * @property {Long} symbolId ProtoOATradeData symbolId
   * @property {Long} volume ProtoOATradeData volume
   * @property {ProtoOATradeSide} tradeSide ProtoOATradeData tradeSide
   * @property {Long|null} [openTimestamp] ProtoOATradeData openTimestamp
   * @property {string|null} [label] ProtoOATradeData label
   * @property {boolean|null} [guaranteedStopLoss] ProtoOATradeData guaranteedStopLoss
   */

  /**
   * Constructs a new ProtoOATradeData.
   * @exports ProtoOATradeData
   * @classdesc Position/order trading details entity.
   * @implements IProtoOATradeData
   * @constructor
   * @param {IProtoOATradeData=} [properties] Properties to set
   */
  function ProtoOATradeData(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATradeData symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATradeData volume.
   * @member {Long} volume
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATradeData tradeSide.
   * @member {ProtoOATradeSide} tradeSide
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.tradeSide = 1;

  /**
   * ProtoOATradeData openTimestamp.
   * @member {Long} openTimestamp
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.openTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATradeData label.
   * @member {string} label
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.label = "";

  /**
   * ProtoOATradeData guaranteedStopLoss.
   * @member {boolean} guaranteedStopLoss
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.guaranteedStopLoss = false;

  /**
   * Creates a new ProtoOATradeData instance using the specified properties.
   * @function create
   * @memberof ProtoOATradeData
   * @static
   * @param {IProtoOATradeData=} [properties] Properties to set
   * @returns {ProtoOATradeData} ProtoOATradeData instance
   */
  ProtoOATradeData.create = function create(properties) {
    return new ProtoOATradeData(properties);
  };

  /**
   * Encodes the specified ProtoOATradeData message. Does not implicitly {@link ProtoOATradeData.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATradeData
   * @static
   * @param {IProtoOATradeData} message ProtoOATradeData message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATradeData.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.symbolId);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.volume);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.tradeSide);
    if (
      message.openTimestamp != null &&
      message.hasOwnProperty("openTimestamp")
    )
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.openTimestamp);
    if (message.label != null && message.hasOwnProperty("label"))
      writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.label);
    if (
      message.guaranteedStopLoss != null &&
      message.hasOwnProperty("guaranteedStopLoss")
    )
      writer
        .uint32(/* id 6, wireType 0 =*/ 48)
        .bool(message.guaranteedStopLoss);
    return writer;
  };

  /**
   * Decodes a ProtoOATradeData message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATradeData
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATradeData} ProtoOATradeData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATradeData.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATradeData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbolId = reader.int64();
          break;
        case 2:
          message.volume = reader.int64();
          break;
        case 3:
          message.tradeSide = reader.int32();
          break;
        case 4:
          message.openTimestamp = reader.int64();
          break;
        case 5:
          message.label = reader.string();
          break;
        case 6:
          message.guaranteedStopLoss = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message
      });
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message
      });
    if (!message.hasOwnProperty("tradeSide"))
      throw $util.ProtocolError("missing required 'tradeSide'", {
        instance: message
      });
    return message;
  };

  return ProtoOATradeData;
})();

$root.ProtoOAOrder = (function() {
  /**
   * Properties of a ProtoOAOrder.
   * @exports IProtoOAOrder
   * @interface IProtoOAOrder
   * @property {Long} orderId ProtoOAOrder orderId
   * @property {IProtoOATradeData} tradeData ProtoOAOrder tradeData
   * @property {ProtoOAOrderType} orderType ProtoOAOrder orderType
   * @property {ProtoOAOrderStatus} orderStatus ProtoOAOrder orderStatus
   * @property {Long|null} [expirationTimestamp] ProtoOAOrder expirationTimestamp
   * @property {number|null} [executionPrice] ProtoOAOrder executionPrice
   * @property {Long|null} [executedVolume] ProtoOAOrder executedVolume
   * @property {Long|null} [utcLastUpdateTimestamp] ProtoOAOrder utcLastUpdateTimestamp
   * @property {number|null} [baseSlippagePrice] ProtoOAOrder baseSlippagePrice
   * @property {Long|null} [slippageInPoints] ProtoOAOrder slippageInPoints
   * @property {boolean|null} [closingOrder] ProtoOAOrder closingOrder
   * @property {number|null} [limitPrice] ProtoOAOrder limitPrice
   * @property {number|null} [stopPrice] ProtoOAOrder stopPrice
   * @property {number|null} [stopLoss] ProtoOAOrder stopLoss
   * @property {number|null} [takeProfit] ProtoOAOrder takeProfit
   * @property {string|null} [clientOrderId] ProtoOAOrder clientOrderId
   * @property {ProtoOATimeInForce|null} [timeInForce] ProtoOAOrder timeInForce
   * @property {Long|null} [positionId] ProtoOAOrder positionId
   * @property {Long|null} [relativeStopLoss] ProtoOAOrder relativeStopLoss
   * @property {Long|null} [relativeTakeProfit] ProtoOAOrder relativeTakeProfit
   * @property {boolean|null} [isStopOut] ProtoOAOrder isStopOut
   * @property {boolean|null} [trailingStopLoss] ProtoOAOrder trailingStopLoss
   * @property {ProtoOAOrderTriggerMethod|null} [stopTriggerMethod] ProtoOAOrder stopTriggerMethod
   */

  /**
   * Constructs a new ProtoOAOrder.
   * @exports ProtoOAOrder
   * @classdesc Trade order entity.
   * @implements IProtoOAOrder
   * @constructor
   * @param {IProtoOAOrder=} [properties] Properties to set
   */
  function ProtoOAOrder(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAOrder orderId.
   * @member {Long} orderId
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.orderId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder tradeData.
   * @member {IProtoOATradeData} tradeData
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.tradeData = null;

  /**
   * ProtoOAOrder orderType.
   * @member {ProtoOAOrderType} orderType
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.orderType = 1;

  /**
   * ProtoOAOrder orderStatus.
   * @member {ProtoOAOrderStatus} orderStatus
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.orderStatus = 1;

  /**
   * ProtoOAOrder expirationTimestamp.
   * @member {Long} expirationTimestamp
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.expirationTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder executionPrice.
   * @member {number} executionPrice
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.executionPrice = 0;

  /**
   * ProtoOAOrder executedVolume.
   * @member {Long} executedVolume
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.executedVolume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder utcLastUpdateTimestamp.
   * @member {Long} utcLastUpdateTimestamp
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.utcLastUpdateTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder baseSlippagePrice.
   * @member {number} baseSlippagePrice
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.baseSlippagePrice = 0;

  /**
   * ProtoOAOrder slippageInPoints.
   * @member {Long} slippageInPoints
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.slippageInPoints = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder closingOrder.
   * @member {boolean} closingOrder
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.closingOrder = false;

  /**
   * ProtoOAOrder limitPrice.
   * @member {number} limitPrice
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.limitPrice = 0;

  /**
   * ProtoOAOrder stopPrice.
   * @member {number} stopPrice
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.stopPrice = 0;

  /**
   * ProtoOAOrder stopLoss.
   * @member {number} stopLoss
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.stopLoss = 0;

  /**
   * ProtoOAOrder takeProfit.
   * @member {number} takeProfit
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.takeProfit = 0;

  /**
   * ProtoOAOrder clientOrderId.
   * @member {string} clientOrderId
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.clientOrderId = "";

  /**
   * ProtoOAOrder timeInForce.
   * @member {ProtoOATimeInForce} timeInForce
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.timeInForce = 3;

  /**
   * ProtoOAOrder positionId.
   * @member {Long} positionId
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder relativeStopLoss.
   * @member {Long} relativeStopLoss
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.relativeStopLoss = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder relativeTakeProfit.
   * @member {Long} relativeTakeProfit
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.relativeTakeProfit = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder isStopOut.
   * @member {boolean} isStopOut
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.isStopOut = false;

  /**
   * ProtoOAOrder trailingStopLoss.
   * @member {boolean} trailingStopLoss
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.trailingStopLoss = false;

  /**
   * ProtoOAOrder stopTriggerMethod.
   * @member {ProtoOAOrderTriggerMethod} stopTriggerMethod
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.stopTriggerMethod = 1;

  /**
   * Creates a new ProtoOAOrder instance using the specified properties.
   * @function create
   * @memberof ProtoOAOrder
   * @static
   * @param {IProtoOAOrder=} [properties] Properties to set
   * @returns {ProtoOAOrder} ProtoOAOrder instance
   */
  ProtoOAOrder.create = function create(properties) {
    return new ProtoOAOrder(properties);
  };

  /**
   * Encodes the specified ProtoOAOrder message. Does not implicitly {@link ProtoOAOrder.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAOrder
   * @static
   * @param {IProtoOAOrder} message ProtoOAOrder message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAOrder.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.orderId);
    $root.ProtoOATradeData.encode(
      message.tradeData,
      writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
    ).ldelim();
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.orderType);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.orderStatus);
    if (
      message.expirationTimestamp != null &&
      message.hasOwnProperty("expirationTimestamp")
    )
      writer
        .uint32(/* id 6, wireType 0 =*/ 48)
        .int64(message.expirationTimestamp);
    if (
      message.executionPrice != null &&
      message.hasOwnProperty("executionPrice")
    )
      writer.uint32(/* id 7, wireType 1 =*/ 57).double(message.executionPrice);
    if (
      message.executedVolume != null &&
      message.hasOwnProperty("executedVolume")
    )
      writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.executedVolume);
    if (
      message.utcLastUpdateTimestamp != null &&
      message.hasOwnProperty("utcLastUpdateTimestamp")
    )
      writer
        .uint32(/* id 9, wireType 0 =*/ 72)
        .int64(message.utcLastUpdateTimestamp);
    if (
      message.baseSlippagePrice != null &&
      message.hasOwnProperty("baseSlippagePrice")
    )
      writer
        .uint32(/* id 10, wireType 1 =*/ 81)
        .double(message.baseSlippagePrice);
    if (
      message.slippageInPoints != null &&
      message.hasOwnProperty("slippageInPoints")
    )
      writer
        .uint32(/* id 11, wireType 0 =*/ 88)
        .int64(message.slippageInPoints);
    if (message.closingOrder != null && message.hasOwnProperty("closingOrder"))
      writer.uint32(/* id 12, wireType 0 =*/ 96).bool(message.closingOrder);
    if (message.limitPrice != null && message.hasOwnProperty("limitPrice"))
      writer.uint32(/* id 13, wireType 1 =*/ 105).double(message.limitPrice);
    if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
      writer.uint32(/* id 14, wireType 1 =*/ 113).double(message.stopPrice);
    if (message.stopLoss != null && message.hasOwnProperty("stopLoss"))
      writer.uint32(/* id 15, wireType 1 =*/ 121).double(message.stopLoss);
    if (message.takeProfit != null && message.hasOwnProperty("takeProfit"))
      writer.uint32(/* id 16, wireType 1 =*/ 129).double(message.takeProfit);
    if (
      message.clientOrderId != null &&
      message.hasOwnProperty("clientOrderId")
    )
      writer.uint32(/* id 17, wireType 2 =*/ 138).string(message.clientOrderId);
    if (message.timeInForce != null && message.hasOwnProperty("timeInForce"))
      writer.uint32(/* id 18, wireType 0 =*/ 144).int32(message.timeInForce);
    if (message.positionId != null && message.hasOwnProperty("positionId"))
      writer.uint32(/* id 19, wireType 0 =*/ 152).int64(message.positionId);
    if (
      message.relativeStopLoss != null &&
      message.hasOwnProperty("relativeStopLoss")
    )
      writer
        .uint32(/* id 20, wireType 0 =*/ 160)
        .int64(message.relativeStopLoss);
    if (
      message.relativeTakeProfit != null &&
      message.hasOwnProperty("relativeTakeProfit")
    )
      writer
        .uint32(/* id 21, wireType 0 =*/ 168)
        .int64(message.relativeTakeProfit);
    if (message.isStopOut != null && message.hasOwnProperty("isStopOut"))
      writer.uint32(/* id 22, wireType 0 =*/ 176).bool(message.isStopOut);
    if (
      message.trailingStopLoss != null &&
      message.hasOwnProperty("trailingStopLoss")
    )
      writer
        .uint32(/* id 23, wireType 0 =*/ 184)
        .bool(message.trailingStopLoss);
    if (
      message.stopTriggerMethod != null &&
      message.hasOwnProperty("stopTriggerMethod")
    )
      writer
        .uint32(/* id 24, wireType 0 =*/ 192)
        .int32(message.stopTriggerMethod);
    return writer;
  };

  /**
   * Decodes a ProtoOAOrder message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAOrder
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAOrder} ProtoOAOrder
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAOrder.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAOrder();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.int64();
          break;
        case 2:
          message.tradeData = $root.ProtoOATradeData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.orderType = reader.int32();
          break;
        case 4:
          message.orderStatus = reader.int32();
          break;
        case 6:
          message.expirationTimestamp = reader.int64();
          break;
        case 7:
          message.executionPrice = reader.double();
          break;
        case 8:
          message.executedVolume = reader.int64();
          break;
        case 9:
          message.utcLastUpdateTimestamp = reader.int64();
          break;
        case 10:
          message.baseSlippagePrice = reader.double();
          break;
        case 11:
          message.slippageInPoints = reader.int64();
          break;
        case 12:
          message.closingOrder = reader.bool();
          break;
        case 13:
          message.limitPrice = reader.double();
          break;
        case 14:
          message.stopPrice = reader.double();
          break;
        case 15:
          message.stopLoss = reader.double();
          break;
        case 16:
          message.takeProfit = reader.double();
          break;
        case 17:
          message.clientOrderId = reader.string();
          break;
        case 18:
          message.timeInForce = reader.int32();
          break;
        case 19:
          message.positionId = reader.int64();
          break;
        case 20:
          message.relativeStopLoss = reader.int64();
          break;
        case 21:
          message.relativeTakeProfit = reader.int64();
          break;
        case 22:
          message.isStopOut = reader.bool();
          break;
        case 23:
          message.trailingStopLoss = reader.bool();
          break;
        case 24:
          message.stopTriggerMethod = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("orderId"))
      throw $util.ProtocolError("missing required 'orderId'", {
        instance: message
      });
    if (!message.hasOwnProperty("tradeData"))
      throw $util.ProtocolError("missing required 'tradeData'", {
        instance: message
      });
    if (!message.hasOwnProperty("orderType"))
      throw $util.ProtocolError("missing required 'orderType'", {
        instance: message
      });
    if (!message.hasOwnProperty("orderStatus"))
      throw $util.ProtocolError("missing required 'orderStatus'", {
        instance: message
      });
    return message;
  };

  return ProtoOAOrder;
})();

/**
 * Execution event type ENUM.
 * @exports ProtoOAExecutionType
 * @enum {string}
 * @property {number} ORDER_ACCEPTED=2 ORDER_ACCEPTED value
 * @property {number} ORDER_FILLED=3 ORDER_FILLED value
 * @property {number} ORDER_REPLACED=4 ORDER_REPLACED value
 * @property {number} ORDER_CANCELLED=5 ORDER_CANCELLED value
 * @property {number} ORDER_EXPIRED=6 ORDER_EXPIRED value
 * @property {number} ORDER_REJECTED=7 ORDER_REJECTED value
 * @property {number} ORDER_CANCEL_REJECTED=8 ORDER_CANCEL_REJECTED value
 * @property {number} SWAP=9 SWAP value
 * @property {number} DEPOSIT_WITHDRAW=10 DEPOSIT_WITHDRAW value
 * @property {number} ORDER_PARTIAL_FILL=11 ORDER_PARTIAL_FILL value
 * @property {number} BONUS_DEPOSIT_WITHDRAW=12 BONUS_DEPOSIT_WITHDRAW value
 */
$root.ProtoOAExecutionType = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[2] = "ORDER_ACCEPTED")] = 2;
  values[(valuesById[3] = "ORDER_FILLED")] = 3;
  values[(valuesById[4] = "ORDER_REPLACED")] = 4;
  values[(valuesById[5] = "ORDER_CANCELLED")] = 5;
  values[(valuesById[6] = "ORDER_EXPIRED")] = 6;
  values[(valuesById[7] = "ORDER_REJECTED")] = 7;
  values[(valuesById[8] = "ORDER_CANCEL_REJECTED")] = 8;
  values[(valuesById[9] = "SWAP")] = 9;
  values[(valuesById[10] = "DEPOSIT_WITHDRAW")] = 10;
  values[(valuesById[11] = "ORDER_PARTIAL_FILL")] = 11;
  values[(valuesById[12] = "BONUS_DEPOSIT_WITHDRAW")] = 12;
  return values;
})();

$root.ProtoOABonusDepositWithdraw = (function() {
  /**
   * Properties of a ProtoOABonusDepositWithdraw.
   * @exports IProtoOABonusDepositWithdraw
   * @interface IProtoOABonusDepositWithdraw
   * @property {ProtoOAChangeBonusType} operationType ProtoOABonusDepositWithdraw operationType
   * @property {Long} bonusHistoryId ProtoOABonusDepositWithdraw bonusHistoryId
   * @property {Long} managerBonus ProtoOABonusDepositWithdraw managerBonus
   * @property {Long} managerDelta ProtoOABonusDepositWithdraw managerDelta
   * @property {Long} ibBonus ProtoOABonusDepositWithdraw ibBonus
   * @property {Long} ibDelta ProtoOABonusDepositWithdraw ibDelta
   * @property {Long} changeBonusTimestamp ProtoOABonusDepositWithdraw changeBonusTimestamp
   * @property {string|null} [externalNote] ProtoOABonusDepositWithdraw externalNote
   * @property {Long|null} [introducingBrokerId] ProtoOABonusDepositWithdraw introducingBrokerId
   */

  /**
   * Constructs a new ProtoOABonusDepositWithdraw.
   * @exports ProtoOABonusDepositWithdraw
   * @classdesc Bonus deposit/withdrawal entity.
   * @implements IProtoOABonusDepositWithdraw
   * @constructor
   * @param {IProtoOABonusDepositWithdraw=} [properties] Properties to set
   */
  function ProtoOABonusDepositWithdraw(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOABonusDepositWithdraw operationType.
   * @member {ProtoOAChangeBonusType} operationType
   * @memberof ProtoOABonusDepositWithdraw
   * @instance
   */
  ProtoOABonusDepositWithdraw.prototype.operationType = 0;

  /**
   * ProtoOABonusDepositWithdraw bonusHistoryId.
   * @member {Long} bonusHistoryId
   * @memberof ProtoOABonusDepositWithdraw
   * @instance
   */
  ProtoOABonusDepositWithdraw.prototype.bonusHistoryId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOABonusDepositWithdraw managerBonus.
   * @member {Long} managerBonus
   * @memberof ProtoOABonusDepositWithdraw
   * @instance
   */
  ProtoOABonusDepositWithdraw.prototype.managerBonus = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOABonusDepositWithdraw managerDelta.
   * @member {Long} managerDelta
   * @memberof ProtoOABonusDepositWithdraw
   * @instance
   */
  ProtoOABonusDepositWithdraw.prototype.managerDelta = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOABonusDepositWithdraw ibBonus.
   * @member {Long} ibBonus
   * @memberof ProtoOABonusDepositWithdraw
   * @instance
   */
  ProtoOABonusDepositWithdraw.prototype.ibBonus = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOABonusDepositWithdraw ibDelta.
   * @member {Long} ibDelta
   * @memberof ProtoOABonusDepositWithdraw
   * @instance
   */
  ProtoOABonusDepositWithdraw.prototype.ibDelta = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOABonusDepositWithdraw changeBonusTimestamp.
   * @member {Long} changeBonusTimestamp
   * @memberof ProtoOABonusDepositWithdraw
   * @instance
   */
  ProtoOABonusDepositWithdraw.prototype.changeBonusTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOABonusDepositWithdraw externalNote.
   * @member {string} externalNote
   * @memberof ProtoOABonusDepositWithdraw
   * @instance
   */
  ProtoOABonusDepositWithdraw.prototype.externalNote = "";

  /**
   * ProtoOABonusDepositWithdraw introducingBrokerId.
   * @member {Long} introducingBrokerId
   * @memberof ProtoOABonusDepositWithdraw
   * @instance
   */
  ProtoOABonusDepositWithdraw.prototype.introducingBrokerId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOABonusDepositWithdraw instance using the specified properties.
   * @function create
   * @memberof ProtoOABonusDepositWithdraw
   * @static
   * @param {IProtoOABonusDepositWithdraw=} [properties] Properties to set
   * @returns {ProtoOABonusDepositWithdraw} ProtoOABonusDepositWithdraw instance
   */
  ProtoOABonusDepositWithdraw.create = function create(properties) {
    return new ProtoOABonusDepositWithdraw(properties);
  };

  /**
   * Encodes the specified ProtoOABonusDepositWithdraw message. Does not implicitly {@link ProtoOABonusDepositWithdraw.verify|verify} messages.
   * @function encode
   * @memberof ProtoOABonusDepositWithdraw
   * @static
   * @param {IProtoOABonusDepositWithdraw} message ProtoOABonusDepositWithdraw message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOABonusDepositWithdraw.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.operationType);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.bonusHistoryId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.managerBonus);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.managerDelta);
    writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.ibBonus);
    writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.ibDelta);
    writer
      .uint32(/* id 7, wireType 0 =*/ 56)
      .int64(message.changeBonusTimestamp);
    if (message.externalNote != null && message.hasOwnProperty("externalNote"))
      writer.uint32(/* id 8, wireType 2 =*/ 66).string(message.externalNote);
    if (
      message.introducingBrokerId != null &&
      message.hasOwnProperty("introducingBrokerId")
    )
      writer
        .uint32(/* id 9, wireType 0 =*/ 72)
        .int64(message.introducingBrokerId);
    return writer;
  };

  /**
   * Decodes a ProtoOABonusDepositWithdraw message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOABonusDepositWithdraw
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOABonusDepositWithdraw} ProtoOABonusDepositWithdraw
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOABonusDepositWithdraw.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOABonusDepositWithdraw();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operationType = reader.int32();
          break;
        case 2:
          message.bonusHistoryId = reader.int64();
          break;
        case 3:
          message.managerBonus = reader.int64();
          break;
        case 4:
          message.managerDelta = reader.int64();
          break;
        case 5:
          message.ibBonus = reader.int64();
          break;
        case 6:
          message.ibDelta = reader.int64();
          break;
        case 7:
          message.changeBonusTimestamp = reader.int64();
          break;
        case 8:
          message.externalNote = reader.string();
          break;
        case 9:
          message.introducingBrokerId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("operationType"))
      throw $util.ProtocolError("missing required 'operationType'", {
        instance: message
      });
    if (!message.hasOwnProperty("bonusHistoryId"))
      throw $util.ProtocolError("missing required 'bonusHistoryId'", {
        instance: message
      });
    if (!message.hasOwnProperty("managerBonus"))
      throw $util.ProtocolError("missing required 'managerBonus'", {
        instance: message
      });
    if (!message.hasOwnProperty("managerDelta"))
      throw $util.ProtocolError("missing required 'managerDelta'", {
        instance: message
      });
    if (!message.hasOwnProperty("ibBonus"))
      throw $util.ProtocolError("missing required 'ibBonus'", {
        instance: message
      });
    if (!message.hasOwnProperty("ibDelta"))
      throw $util.ProtocolError("missing required 'ibDelta'", {
        instance: message
      });
    if (!message.hasOwnProperty("changeBonusTimestamp"))
      throw $util.ProtocolError("missing required 'changeBonusTimestamp'", {
        instance: message
      });
    return message;
  };

  return ProtoOABonusDepositWithdraw;
})();

/**
 * Bonus operation type ENUM.
 * @exports ProtoOAChangeBonusType
 * @enum {string}
 * @property {number} BONUS_DEPOSIT=0 BONUS_DEPOSIT value
 * @property {number} BONUS_WITHDRAW=1 BONUS_WITHDRAW value
 */
$root.ProtoOAChangeBonusType = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "BONUS_DEPOSIT")] = 0;
  values[(valuesById[1] = "BONUS_WITHDRAW")] = 1;
  return values;
})();

$root.ProtoOADepositWithdraw = (function() {
  /**
   * Properties of a ProtoOADepositWithdraw.
   * @exports IProtoOADepositWithdraw
   * @interface IProtoOADepositWithdraw
   * @property {ProtoOAChangeBalanceType} operationType ProtoOADepositWithdraw operationType
   * @property {Long} balanceHistoryId ProtoOADepositWithdraw balanceHistoryId
   * @property {Long} balance ProtoOADepositWithdraw balance
   * @property {Long} delta ProtoOADepositWithdraw delta
   * @property {Long} changeBalanceTimestamp ProtoOADepositWithdraw changeBalanceTimestamp
   * @property {string|null} [externalNote] ProtoOADepositWithdraw externalNote
   * @property {Long|null} [balanceVersion] ProtoOADepositWithdraw balanceVersion
   * @property {Long|null} [equity] ProtoOADepositWithdraw equity
   */

  /**
   * Constructs a new ProtoOADepositWithdraw.
   * @exports ProtoOADepositWithdraw
   * @classdesc Account deposit/withdrawal operation entity.
   * @implements IProtoOADepositWithdraw
   * @constructor
   * @param {IProtoOADepositWithdraw=} [properties] Properties to set
   */
  function ProtoOADepositWithdraw(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADepositWithdraw operationType.
   * @member {ProtoOAChangeBalanceType} operationType
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.operationType = 0;

  /**
   * ProtoOADepositWithdraw balanceHistoryId.
   * @member {Long} balanceHistoryId
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.balanceHistoryId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepositWithdraw balance.
   * @member {Long} balance
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.balance = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepositWithdraw delta.
   * @member {Long} delta
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.delta = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepositWithdraw changeBalanceTimestamp.
   * @member {Long} changeBalanceTimestamp
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.changeBalanceTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepositWithdraw externalNote.
   * @member {string} externalNote
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.externalNote = "";

  /**
   * ProtoOADepositWithdraw balanceVersion.
   * @member {Long} balanceVersion
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.balanceVersion = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepositWithdraw equity.
   * @member {Long} equity
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.equity = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOADepositWithdraw instance using the specified properties.
   * @function create
   * @memberof ProtoOADepositWithdraw
   * @static
   * @param {IProtoOADepositWithdraw=} [properties] Properties to set
   * @returns {ProtoOADepositWithdraw} ProtoOADepositWithdraw instance
   */
  ProtoOADepositWithdraw.create = function create(properties) {
    return new ProtoOADepositWithdraw(properties);
  };

  /**
   * Encodes the specified ProtoOADepositWithdraw message. Does not implicitly {@link ProtoOADepositWithdraw.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADepositWithdraw
   * @static
   * @param {IProtoOADepositWithdraw} message ProtoOADepositWithdraw message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADepositWithdraw.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.operationType);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.balanceHistoryId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.balance);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.delta);
    writer
      .uint32(/* id 5, wireType 0 =*/ 40)
      .int64(message.changeBalanceTimestamp);
    if (message.externalNote != null && message.hasOwnProperty("externalNote"))
      writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.externalNote);
    if (
      message.balanceVersion != null &&
      message.hasOwnProperty("balanceVersion")
    )
      writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.balanceVersion);
    if (message.equity != null && message.hasOwnProperty("equity"))
      writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.equity);
    return writer;
  };

  /**
   * Decodes a ProtoOADepositWithdraw message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADepositWithdraw
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADepositWithdraw} ProtoOADepositWithdraw
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADepositWithdraw.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADepositWithdraw();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operationType = reader.int32();
          break;
        case 2:
          message.balanceHistoryId = reader.int64();
          break;
        case 3:
          message.balance = reader.int64();
          break;
        case 4:
          message.delta = reader.int64();
          break;
        case 5:
          message.changeBalanceTimestamp = reader.int64();
          break;
        case 6:
          message.externalNote = reader.string();
          break;
        case 7:
          message.balanceVersion = reader.int64();
          break;
        case 8:
          message.equity = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("operationType"))
      throw $util.ProtocolError("missing required 'operationType'", {
        instance: message
      });
    if (!message.hasOwnProperty("balanceHistoryId"))
      throw $util.ProtocolError("missing required 'balanceHistoryId'", {
        instance: message
      });
    if (!message.hasOwnProperty("balance"))
      throw $util.ProtocolError("missing required 'balance'", {
        instance: message
      });
    if (!message.hasOwnProperty("delta"))
      throw $util.ProtocolError("missing required 'delta'", {
        instance: message
      });
    if (!message.hasOwnProperty("changeBalanceTimestamp"))
      throw $util.ProtocolError("missing required 'changeBalanceTimestamp'", {
        instance: message
      });
    return message;
  };

  return ProtoOADepositWithdraw;
})();

/**
 * Balance operation entity. Covers all cash movement operations related to account, trading, IB operations, mirroring, etc.
 * @exports ProtoOAChangeBalanceType
 * @enum {string}
 * @property {number} BALANCE_DEPOSIT=0 BALANCE_DEPOSIT value
 * @property {number} BALANCE_WITHDRAW=1 BALANCE_WITHDRAW value
 * @property {number} BALANCE_DEPOSIT_STRATEGY_COMMISSION_INNER=3 BALANCE_DEPOSIT_STRATEGY_COMMISSION_INNER value
 * @property {number} BALANCE_WITHDRAW_STRATEGY_COMMISSION_INNER=4 BALANCE_WITHDRAW_STRATEGY_COMMISSION_INNER value
 * @property {number} BALANCE_DEPOSIT_IB_COMMISSIONS=5 BALANCE_DEPOSIT_IB_COMMISSIONS value
 * @property {number} BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE=6 BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE value
 * @property {number} BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_SUB_IB=7 BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_SUB_IB value
 * @property {number} BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_BROKER=8 BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_BROKER value
 * @property {number} BALANCE_DEPOSIT_REBATE=9 BALANCE_DEPOSIT_REBATE value
 * @property {number} BALANCE_WITHDRAW_REBATE=10 BALANCE_WITHDRAW_REBATE value
 * @property {number} BALANCE_DEPOSIT_STRATEGY_COMMISSION_OUTER=11 BALANCE_DEPOSIT_STRATEGY_COMMISSION_OUTER value
 * @property {number} BALANCE_WITHDRAW_STRATEGY_COMMISSION_OUTER=12 BALANCE_WITHDRAW_STRATEGY_COMMISSION_OUTER value
 * @property {number} BALANCE_WITHDRAW_BONUS_COMPENSATION=13 BALANCE_WITHDRAW_BONUS_COMPENSATION value
 * @property {number} BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE_TO_BROKER=14 BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE_TO_BROKER value
 * @property {number} BALANCE_DEPOSIT_DIVIDENDS=15 BALANCE_DEPOSIT_DIVIDENDS value
 * @property {number} BALANCE_WITHDRAW_DIVIDENDS=16 BALANCE_WITHDRAW_DIVIDENDS value
 * @property {number} BALANCE_WITHDRAW_GSL_CHARGE=17 BALANCE_WITHDRAW_GSL_CHARGE value
 * @property {number} BALANCE_WITHDRAW_ROLLOVER=18 BALANCE_WITHDRAW_ROLLOVER value
 * @property {number} BALANCE_DEPOSIT_NONWITHDRAWABLE_BONUS=19 BALANCE_DEPOSIT_NONWITHDRAWABLE_BONUS value
 * @property {number} BALANCE_WITHDRAW_NONWITHDRAWABLE_BONUS=20 BALANCE_WITHDRAW_NONWITHDRAWABLE_BONUS value
 * @property {number} BALANCE_DEPOSIT_SWAP=21 BALANCE_DEPOSIT_SWAP value
 * @property {number} BALANCE_WITHDRAW_SWAP=22 BALANCE_WITHDRAW_SWAP value
 * @property {number} BALANCE_DEPOSIT_MANAGEMENT_FEE=27 BALANCE_DEPOSIT_MANAGEMENT_FEE value
 * @property {number} BALANCE_WITHDRAW_MANAGEMENT_FEE=28 BALANCE_WITHDRAW_MANAGEMENT_FEE value
 * @property {number} BALANCE_DEPOSIT_PERFORMANCE_FEE=29 BALANCE_DEPOSIT_PERFORMANCE_FEE value
 * @property {number} BALANCE_WITHDRAW_INACTIVITY_FEE=35 BALANCE_WITHDRAW_INACTIVITY_FEE value
 */
$root.ProtoOAChangeBalanceType = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "BALANCE_DEPOSIT")] = 0;
  values[(valuesById[1] = "BALANCE_WITHDRAW")] = 1;
  values[(valuesById[3] = "BALANCE_DEPOSIT_STRATEGY_COMMISSION_INNER")] = 3;
  values[(valuesById[4] = "BALANCE_WITHDRAW_STRATEGY_COMMISSION_INNER")] = 4;
  values[(valuesById[5] = "BALANCE_DEPOSIT_IB_COMMISSIONS")] = 5;
  values[(valuesById[6] = "BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE")] = 6;
  values[
    (valuesById[7] = "BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_SUB_IB")
  ] = 7;
  values[
    (valuesById[8] = "BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_BROKER")
  ] = 8;
  values[(valuesById[9] = "BALANCE_DEPOSIT_REBATE")] = 9;
  values[(valuesById[10] = "BALANCE_WITHDRAW_REBATE")] = 10;
  values[(valuesById[11] = "BALANCE_DEPOSIT_STRATEGY_COMMISSION_OUTER")] = 11;
  values[(valuesById[12] = "BALANCE_WITHDRAW_STRATEGY_COMMISSION_OUTER")] = 12;
  values[(valuesById[13] = "BALANCE_WITHDRAW_BONUS_COMPENSATION")] = 13;
  values[
    (valuesById[14] = "BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE_TO_BROKER")
  ] = 14;
  values[(valuesById[15] = "BALANCE_DEPOSIT_DIVIDENDS")] = 15;
  values[(valuesById[16] = "BALANCE_WITHDRAW_DIVIDENDS")] = 16;
  values[(valuesById[17] = "BALANCE_WITHDRAW_GSL_CHARGE")] = 17;
  values[(valuesById[18] = "BALANCE_WITHDRAW_ROLLOVER")] = 18;
  values[(valuesById[19] = "BALANCE_DEPOSIT_NONWITHDRAWABLE_BONUS")] = 19;
  values[(valuesById[20] = "BALANCE_WITHDRAW_NONWITHDRAWABLE_BONUS")] = 20;
  values[(valuesById[21] = "BALANCE_DEPOSIT_SWAP")] = 21;
  values[(valuesById[22] = "BALANCE_WITHDRAW_SWAP")] = 22;
  values[(valuesById[27] = "BALANCE_DEPOSIT_MANAGEMENT_FEE")] = 27;
  values[(valuesById[28] = "BALANCE_WITHDRAW_MANAGEMENT_FEE")] = 28;
  values[(valuesById[29] = "BALANCE_DEPOSIT_PERFORMANCE_FEE")] = 29;
  values[(valuesById[35] = "BALANCE_WITHDRAW_INACTIVITY_FEE")] = 35;
  return values;
})();

$root.ProtoOADeal = (function() {
  /**
   * Properties of a ProtoOADeal.
   * @exports IProtoOADeal
   * @interface IProtoOADeal
   * @property {Long} dealId ProtoOADeal dealId
   * @property {Long} orderId ProtoOADeal orderId
   * @property {Long} positionId ProtoOADeal positionId
   * @property {Long} volume ProtoOADeal volume
   * @property {Long} filledVolume ProtoOADeal filledVolume
   * @property {Long} symbolId ProtoOADeal symbolId
   * @property {Long} createTimestamp ProtoOADeal createTimestamp
   * @property {Long} executionTimestamp ProtoOADeal executionTimestamp
   * @property {Long|null} [utcLastUpdateTimestamp] ProtoOADeal utcLastUpdateTimestamp
   * @property {number|null} [executionPrice] ProtoOADeal executionPrice
   * @property {ProtoOATradeSide} tradeSide ProtoOADeal tradeSide
   * @property {ProtoOADealStatus} dealStatus ProtoOADeal dealStatus
   * @property {number|null} [marginRate] ProtoOADeal marginRate
   * @property {Long|null} [commission] ProtoOADeal commission
   * @property {number|null} [baseToUsdConversionRate] ProtoOADeal baseToUsdConversionRate
   * @property {IProtoOAClosePositionDetail|null} [closePositionDetail] ProtoOADeal closePositionDetail
   */

  /**
   * Constructs a new ProtoOADeal.
   * @exports ProtoOADeal
   * @classdesc Execution entity.
   * @implements IProtoOADeal
   * @constructor
   * @param {IProtoOADeal=} [properties] Properties to set
   */
  function ProtoOADeal(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADeal dealId.
   * @member {Long} dealId
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.dealId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal orderId.
   * @member {Long} orderId
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.orderId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal positionId.
   * @member {Long} positionId
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal volume.
   * @member {Long} volume
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal filledVolume.
   * @member {Long} filledVolume
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.filledVolume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal symbolId.
   * @member {Long} symbolId
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal createTimestamp.
   * @member {Long} createTimestamp
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.createTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal executionTimestamp.
   * @member {Long} executionTimestamp
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.executionTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal utcLastUpdateTimestamp.
   * @member {Long} utcLastUpdateTimestamp
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.utcLastUpdateTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal executionPrice.
   * @member {number} executionPrice
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.executionPrice = 0;

  /**
   * ProtoOADeal tradeSide.
   * @member {ProtoOATradeSide} tradeSide
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.tradeSide = 1;

  /**
   * ProtoOADeal dealStatus.
   * @member {ProtoOADealStatus} dealStatus
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.dealStatus = 2;

  /**
   * ProtoOADeal marginRate.
   * @member {number} marginRate
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.marginRate = 0;

  /**
   * ProtoOADeal commission.
   * @member {Long} commission
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.commission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal baseToUsdConversionRate.
   * @member {number} baseToUsdConversionRate
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.baseToUsdConversionRate = 0;

  /**
   * ProtoOADeal closePositionDetail.
   * @member {IProtoOAClosePositionDetail|null|undefined} closePositionDetail
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.closePositionDetail = null;

  /**
   * Creates a new ProtoOADeal instance using the specified properties.
   * @function create
   * @memberof ProtoOADeal
   * @static
   * @param {IProtoOADeal=} [properties] Properties to set
   * @returns {ProtoOADeal} ProtoOADeal instance
   */
  ProtoOADeal.create = function create(properties) {
    return new ProtoOADeal(properties);
  };

  /**
   * Encodes the specified ProtoOADeal message. Does not implicitly {@link ProtoOADeal.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADeal
   * @static
   * @param {IProtoOADeal} message ProtoOADeal message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADeal.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.dealId);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.orderId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.positionId);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.volume);
    writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.filledVolume);
    writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.symbolId);
    writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.createTimestamp);
    writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.executionTimestamp);
    if (
      message.utcLastUpdateTimestamp != null &&
      message.hasOwnProperty("utcLastUpdateTimestamp")
    )
      writer
        .uint32(/* id 9, wireType 0 =*/ 72)
        .int64(message.utcLastUpdateTimestamp);
    if (
      message.executionPrice != null &&
      message.hasOwnProperty("executionPrice")
    )
      writer.uint32(/* id 10, wireType 1 =*/ 81).double(message.executionPrice);
    writer.uint32(/* id 11, wireType 0 =*/ 88).int32(message.tradeSide);
    writer.uint32(/* id 12, wireType 0 =*/ 96).int32(message.dealStatus);
    if (message.marginRate != null && message.hasOwnProperty("marginRate"))
      writer.uint32(/* id 13, wireType 1 =*/ 105).double(message.marginRate);
    if (message.commission != null && message.hasOwnProperty("commission"))
      writer.uint32(/* id 14, wireType 0 =*/ 112).int64(message.commission);
    if (
      message.baseToUsdConversionRate != null &&
      message.hasOwnProperty("baseToUsdConversionRate")
    )
      writer
        .uint32(/* id 15, wireType 1 =*/ 121)
        .double(message.baseToUsdConversionRate);
    if (
      message.closePositionDetail != null &&
      message.hasOwnProperty("closePositionDetail")
    )
      $root.ProtoOAClosePositionDetail.encode(
        message.closePositionDetail,
        writer.uint32(/* id 16, wireType 2 =*/ 130).fork()
      ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOADeal message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADeal
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADeal} ProtoOADeal
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADeal.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADeal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dealId = reader.int64();
          break;
        case 2:
          message.orderId = reader.int64();
          break;
        case 3:
          message.positionId = reader.int64();
          break;
        case 4:
          message.volume = reader.int64();
          break;
        case 5:
          message.filledVolume = reader.int64();
          break;
        case 6:
          message.symbolId = reader.int64();
          break;
        case 7:
          message.createTimestamp = reader.int64();
          break;
        case 8:
          message.executionTimestamp = reader.int64();
          break;
        case 9:
          message.utcLastUpdateTimestamp = reader.int64();
          break;
        case 10:
          message.executionPrice = reader.double();
          break;
        case 11:
          message.tradeSide = reader.int32();
          break;
        case 12:
          message.dealStatus = reader.int32();
          break;
        case 13:
          message.marginRate = reader.double();
          break;
        case 14:
          message.commission = reader.int64();
          break;
        case 15:
          message.baseToUsdConversionRate = reader.double();
          break;
        case 16:
          message.closePositionDetail = $root.ProtoOAClosePositionDetail.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("dealId"))
      throw $util.ProtocolError("missing required 'dealId'", {
        instance: message
      });
    if (!message.hasOwnProperty("orderId"))
      throw $util.ProtocolError("missing required 'orderId'", {
        instance: message
      });
    if (!message.hasOwnProperty("positionId"))
      throw $util.ProtocolError("missing required 'positionId'", {
        instance: message
      });
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message
      });
    if (!message.hasOwnProperty("filledVolume"))
      throw $util.ProtocolError("missing required 'filledVolume'", {
        instance: message
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message
      });
    if (!message.hasOwnProperty("createTimestamp"))
      throw $util.ProtocolError("missing required 'createTimestamp'", {
        instance: message
      });
    if (!message.hasOwnProperty("executionTimestamp"))
      throw $util.ProtocolError("missing required 'executionTimestamp'", {
        instance: message
      });
    if (!message.hasOwnProperty("tradeSide"))
      throw $util.ProtocolError("missing required 'tradeSide'", {
        instance: message
      });
    if (!message.hasOwnProperty("dealStatus"))
      throw $util.ProtocolError("missing required 'dealStatus'", {
        instance: message
      });
    return message;
  };

  return ProtoOADeal;
})();

/**
 * Deal status ENUM.
 * @exports ProtoOADealStatus
 * @enum {string}
 * @property {number} FILLED=2 FILLED value
 * @property {number} PARTIALLY_FILLED=3 PARTIALLY_FILLED value
 * @property {number} REJECTED=4 REJECTED value
 * @property {number} INTERNALLY_REJECTED=5 INTERNALLY_REJECTED value
 * @property {number} ERROR=6 ERROR value
 * @property {number} MISSED=7 MISSED value
 */
$root.ProtoOADealStatus = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[2] = "FILLED")] = 2;
  values[(valuesById[3] = "PARTIALLY_FILLED")] = 3;
  values[(valuesById[4] = "REJECTED")] = 4;
  values[(valuesById[5] = "INTERNALLY_REJECTED")] = 5;
  values[(valuesById[6] = "ERROR")] = 6;
  values[(valuesById[7] = "MISSED")] = 7;
  return values;
})();

$root.ProtoOAClosePositionDetail = (function() {
  /**
   * Properties of a ProtoOAClosePositionDetail.
   * @exports IProtoOAClosePositionDetail
   * @interface IProtoOAClosePositionDetail
   * @property {number} entryPrice ProtoOAClosePositionDetail entryPrice
   * @property {Long} grossProfit ProtoOAClosePositionDetail grossProfit
   * @property {Long} swap ProtoOAClosePositionDetail swap
   * @property {Long} commission ProtoOAClosePositionDetail commission
   * @property {Long} balance ProtoOAClosePositionDetail balance
   * @property {number|null} [quoteToDepositConversionRate] ProtoOAClosePositionDetail quoteToDepositConversionRate
   * @property {Long|null} [closedVolume] ProtoOAClosePositionDetail closedVolume
   * @property {Long|null} [balanceVersion] ProtoOAClosePositionDetail balanceVersion
   */

  /**
   * Constructs a new ProtoOAClosePositionDetail.
   * @exports ProtoOAClosePositionDetail
   * @classdesc Trading details for closing deal.
   * @implements IProtoOAClosePositionDetail
   * @constructor
   * @param {IProtoOAClosePositionDetail=} [properties] Properties to set
   */
  function ProtoOAClosePositionDetail(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAClosePositionDetail entryPrice.
   * @member {number} entryPrice
   * @memberof ProtoOAClosePositionDetail
   * @instance
   */
  ProtoOAClosePositionDetail.prototype.entryPrice = 0;

  /**
   * ProtoOAClosePositionDetail grossProfit.
   * @member {Long} grossProfit
   * @memberof ProtoOAClosePositionDetail
   * @instance
   */
  ProtoOAClosePositionDetail.prototype.grossProfit = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAClosePositionDetail swap.
   * @member {Long} swap
   * @memberof ProtoOAClosePositionDetail
   * @instance
   */
  ProtoOAClosePositionDetail.prototype.swap = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAClosePositionDetail commission.
   * @member {Long} commission
   * @memberof ProtoOAClosePositionDetail
   * @instance
   */
  ProtoOAClosePositionDetail.prototype.commission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAClosePositionDetail balance.
   * @member {Long} balance
   * @memberof ProtoOAClosePositionDetail
   * @instance
   */
  ProtoOAClosePositionDetail.prototype.balance = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAClosePositionDetail quoteToDepositConversionRate.
   * @member {number} quoteToDepositConversionRate
   * @memberof ProtoOAClosePositionDetail
   * @instance
   */
  ProtoOAClosePositionDetail.prototype.quoteToDepositConversionRate = 0;

  /**
   * ProtoOAClosePositionDetail closedVolume.
   * @member {Long} closedVolume
   * @memberof ProtoOAClosePositionDetail
   * @instance
   */
  ProtoOAClosePositionDetail.prototype.closedVolume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAClosePositionDetail balanceVersion.
   * @member {Long} balanceVersion
   * @memberof ProtoOAClosePositionDetail
   * @instance
   */
  ProtoOAClosePositionDetail.prototype.balanceVersion = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAClosePositionDetail instance using the specified properties.
   * @function create
   * @memberof ProtoOAClosePositionDetail
   * @static
   * @param {IProtoOAClosePositionDetail=} [properties] Properties to set
   * @returns {ProtoOAClosePositionDetail} ProtoOAClosePositionDetail instance
   */
  ProtoOAClosePositionDetail.create = function create(properties) {
    return new ProtoOAClosePositionDetail(properties);
  };

  /**
   * Encodes the specified ProtoOAClosePositionDetail message. Does not implicitly {@link ProtoOAClosePositionDetail.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAClosePositionDetail
   * @static
   * @param {IProtoOAClosePositionDetail} message ProtoOAClosePositionDetail message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAClosePositionDetail.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.entryPrice);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.grossProfit);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.swap);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.commission);
    writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.balance);
    if (
      message.quoteToDepositConversionRate != null &&
      message.hasOwnProperty("quoteToDepositConversionRate")
    )
      writer
        .uint32(/* id 6, wireType 1 =*/ 49)
        .double(message.quoteToDepositConversionRate);
    if (message.closedVolume != null && message.hasOwnProperty("closedVolume"))
      writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.closedVolume);
    if (
      message.balanceVersion != null &&
      message.hasOwnProperty("balanceVersion")
    )
      writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.balanceVersion);
    return writer;
  };

  /**
   * Decodes a ProtoOAClosePositionDetail message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAClosePositionDetail
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAClosePositionDetail} ProtoOAClosePositionDetail
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAClosePositionDetail.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAClosePositionDetail();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entryPrice = reader.double();
          break;
        case 2:
          message.grossProfit = reader.int64();
          break;
        case 3:
          message.swap = reader.int64();
          break;
        case 4:
          message.commission = reader.int64();
          break;
        case 5:
          message.balance = reader.int64();
          break;
        case 6:
          message.quoteToDepositConversionRate = reader.double();
          break;
        case 7:
          message.closedVolume = reader.int64();
          break;
        case 8:
          message.balanceVersion = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("entryPrice"))
      throw $util.ProtocolError("missing required 'entryPrice'", {
        instance: message
      });
    if (!message.hasOwnProperty("grossProfit"))
      throw $util.ProtocolError("missing required 'grossProfit'", {
        instance: message
      });
    if (!message.hasOwnProperty("swap"))
      throw $util.ProtocolError("missing required 'swap'", {
        instance: message
      });
    if (!message.hasOwnProperty("commission"))
      throw $util.ProtocolError("missing required 'commission'", {
        instance: message
      });
    if (!message.hasOwnProperty("balance"))
      throw $util.ProtocolError("missing required 'balance'", {
        instance: message
      });
    return message;
  };

  return ProtoOAClosePositionDetail;
})();

/**
 * Trendbar period ENUM.
 * @exports ProtoOATrendbarPeriod
 * @enum {string}
 * @property {number} M1=1 M1 value
 * @property {number} M2=2 M2 value
 * @property {number} M3=3 M3 value
 * @property {number} M4=4 M4 value
 * @property {number} M5=5 M5 value
 * @property {number} M10=6 M10 value
 * @property {number} M15=7 M15 value
 * @property {number} M30=8 M30 value
 * @property {number} H1=9 H1 value
 * @property {number} H4=10 H4 value
 * @property {number} H12=11 H12 value
 * @property {number} D1=12 D1 value
 * @property {number} W1=13 W1 value
 * @property {number} MN1=14 MN1 value
 */
$root.ProtoOATrendbarPeriod = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "M1")] = 1;
  values[(valuesById[2] = "M2")] = 2;
  values[(valuesById[3] = "M3")] = 3;
  values[(valuesById[4] = "M4")] = 4;
  values[(valuesById[5] = "M5")] = 5;
  values[(valuesById[6] = "M10")] = 6;
  values[(valuesById[7] = "M15")] = 7;
  values[(valuesById[8] = "M30")] = 8;
  values[(valuesById[9] = "H1")] = 9;
  values[(valuesById[10] = "H4")] = 10;
  values[(valuesById[11] = "H12")] = 11;
  values[(valuesById[12] = "D1")] = 12;
  values[(valuesById[13] = "W1")] = 13;
  values[(valuesById[14] = "MN1")] = 14;
  return values;
})();

$root.ProtoOATrendbar = (function() {
  /**
   * Properties of a ProtoOATrendbar.
   * @exports IProtoOATrendbar
   * @interface IProtoOATrendbar
   * @property {Long} volume ProtoOATrendbar volume
   * @property {ProtoOATrendbarPeriod|null} [period] ProtoOATrendbar period
   * @property {Long|null} [low] ProtoOATrendbar low
   * @property {Long|null} [deltaOpen] ProtoOATrendbar deltaOpen
   * @property {Long|null} [deltaClose] ProtoOATrendbar deltaClose
   * @property {Long|null} [deltaHigh] ProtoOATrendbar deltaHigh
   * @property {number|null} [utcTimestampInMinutes] ProtoOATrendbar utcTimestampInMinutes
   */

  /**
   * Constructs a new ProtoOATrendbar.
   * @exports ProtoOATrendbar
   * @classdesc Historical Trendbar entity.
   * @implements IProtoOATrendbar
   * @constructor
   * @param {IProtoOATrendbar=} [properties] Properties to set
   */
  function ProtoOATrendbar(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATrendbar volume.
   * @member {Long} volume
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrendbar period.
   * @member {ProtoOATrendbarPeriod} period
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.period = 1;

  /**
   * ProtoOATrendbar low.
   * @member {Long} low
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.low = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrendbar deltaOpen.
   * @member {Long} deltaOpen
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.deltaOpen = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOATrendbar deltaClose.
   * @member {Long} deltaClose
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.deltaClose = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOATrendbar deltaHigh.
   * @member {Long} deltaHigh
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.deltaHigh = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOATrendbar utcTimestampInMinutes.
   * @member {number} utcTimestampInMinutes
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.utcTimestampInMinutes = 0;

  /**
   * Creates a new ProtoOATrendbar instance using the specified properties.
   * @function create
   * @memberof ProtoOATrendbar
   * @static
   * @param {IProtoOATrendbar=} [properties] Properties to set
   * @returns {ProtoOATrendbar} ProtoOATrendbar instance
   */
  ProtoOATrendbar.create = function create(properties) {
    return new ProtoOATrendbar(properties);
  };

  /**
   * Encodes the specified ProtoOATrendbar message. Does not implicitly {@link ProtoOATrendbar.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATrendbar
   * @static
   * @param {IProtoOATrendbar} message ProtoOATrendbar message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATrendbar.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.volume);
    if (message.period != null && message.hasOwnProperty("period"))
      writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.period);
    if (message.low != null && message.hasOwnProperty("low"))
      writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.low);
    if (message.deltaOpen != null && message.hasOwnProperty("deltaOpen"))
      writer.uint32(/* id 6, wireType 0 =*/ 48).uint64(message.deltaOpen);
    if (message.deltaClose != null && message.hasOwnProperty("deltaClose"))
      writer.uint32(/* id 7, wireType 0 =*/ 56).uint64(message.deltaClose);
    if (message.deltaHigh != null && message.hasOwnProperty("deltaHigh"))
      writer.uint32(/* id 8, wireType 0 =*/ 64).uint64(message.deltaHigh);
    if (
      message.utcTimestampInMinutes != null &&
      message.hasOwnProperty("utcTimestampInMinutes")
    )
      writer
        .uint32(/* id 9, wireType 0 =*/ 72)
        .uint32(message.utcTimestampInMinutes);
    return writer;
  };

  /**
   * Decodes a ProtoOATrendbar message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATrendbar
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATrendbar} ProtoOATrendbar
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATrendbar.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATrendbar();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.volume = reader.int64();
          break;
        case 4:
          message.period = reader.int32();
          break;
        case 5:
          message.low = reader.int64();
          break;
        case 6:
          message.deltaOpen = reader.uint64();
          break;
        case 7:
          message.deltaClose = reader.uint64();
          break;
        case 8:
          message.deltaHigh = reader.uint64();
          break;
        case 9:
          message.utcTimestampInMinutes = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message
      });
    return message;
  };

  return ProtoOATrendbar;
})();

$root.ProtoOAExpectedMargin = (function() {
  /**
   * Properties of a ProtoOAExpectedMargin.
   * @exports IProtoOAExpectedMargin
   * @interface IProtoOAExpectedMargin
   * @property {Long} volume ProtoOAExpectedMargin volume
   * @property {Long} buyMargin ProtoOAExpectedMargin buyMargin
   * @property {Long} sellMargin ProtoOAExpectedMargin sellMargin
   */

  /**
   * Constructs a new ProtoOAExpectedMargin.
   * @exports ProtoOAExpectedMargin
   * @classdesc Expected margin computation entity.
   * @implements IProtoOAExpectedMargin
   * @constructor
   * @param {IProtoOAExpectedMargin=} [properties] Properties to set
   */
  function ProtoOAExpectedMargin(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAExpectedMargin volume.
   * @member {Long} volume
   * @memberof ProtoOAExpectedMargin
   * @instance
   */
  ProtoOAExpectedMargin.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAExpectedMargin buyMargin.
   * @member {Long} buyMargin
   * @memberof ProtoOAExpectedMargin
   * @instance
   */
  ProtoOAExpectedMargin.prototype.buyMargin = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAExpectedMargin sellMargin.
   * @member {Long} sellMargin
   * @memberof ProtoOAExpectedMargin
   * @instance
   */
  ProtoOAExpectedMargin.prototype.sellMargin = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAExpectedMargin instance using the specified properties.
   * @function create
   * @memberof ProtoOAExpectedMargin
   * @static
   * @param {IProtoOAExpectedMargin=} [properties] Properties to set
   * @returns {ProtoOAExpectedMargin} ProtoOAExpectedMargin instance
   */
  ProtoOAExpectedMargin.create = function create(properties) {
    return new ProtoOAExpectedMargin(properties);
  };

  /**
   * Encodes the specified ProtoOAExpectedMargin message. Does not implicitly {@link ProtoOAExpectedMargin.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAExpectedMargin
   * @static
   * @param {IProtoOAExpectedMargin} message ProtoOAExpectedMargin message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAExpectedMargin.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.volume);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.buyMargin);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.sellMargin);
    return writer;
  };

  /**
   * Decodes a ProtoOAExpectedMargin message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAExpectedMargin
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAExpectedMargin} ProtoOAExpectedMargin
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAExpectedMargin.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAExpectedMargin();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = reader.int64();
          break;
        case 2:
          message.buyMargin = reader.int64();
          break;
        case 3:
          message.sellMargin = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message
      });
    if (!message.hasOwnProperty("buyMargin"))
      throw $util.ProtocolError("missing required 'buyMargin'", {
        instance: message
      });
    if (!message.hasOwnProperty("sellMargin"))
      throw $util.ProtocolError("missing required 'sellMargin'", {
        instance: message
      });
    return message;
  };

  return ProtoOAExpectedMargin;
})();

/**
 * Price quote type.
 * @exports ProtoOAQuoteType
 * @enum {string}
 * @property {number} BID=1 BID value
 * @property {number} ASK=2 ASK value
 */
$root.ProtoOAQuoteType = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "BID")] = 1;
  values[(valuesById[2] = "ASK")] = 2;
  return values;
})();

$root.ProtoOATickData = (function() {
  /**
   * Properties of a ProtoOATickData.
   * @exports IProtoOATickData
   * @interface IProtoOATickData
   * @property {Long} timestamp ProtoOATickData timestamp
   * @property {Long} tick ProtoOATickData tick
   */

  /**
   * Constructs a new ProtoOATickData.
   * @exports ProtoOATickData
   * @classdesc Historical tick data type.
   * @implements IProtoOATickData
   * @constructor
   * @param {IProtoOATickData=} [properties] Properties to set
   */
  function ProtoOATickData(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATickData timestamp.
   * @member {Long} timestamp
   * @memberof ProtoOATickData
   * @instance
   */
  ProtoOATickData.prototype.timestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATickData tick.
   * @member {Long} tick
   * @memberof ProtoOATickData
   * @instance
   */
  ProtoOATickData.prototype.tick = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOATickData instance using the specified properties.
   * @function create
   * @memberof ProtoOATickData
   * @static
   * @param {IProtoOATickData=} [properties] Properties to set
   * @returns {ProtoOATickData} ProtoOATickData instance
   */
  ProtoOATickData.create = function create(properties) {
    return new ProtoOATickData(properties);
  };

  /**
   * Encodes the specified ProtoOATickData message. Does not implicitly {@link ProtoOATickData.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATickData
   * @static
   * @param {IProtoOATickData} message ProtoOATickData message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATickData.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.timestamp);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.tick);
    return writer;
  };

  /**
   * Decodes a ProtoOATickData message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATickData
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATickData} ProtoOATickData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATickData.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATickData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.int64();
          break;
        case 2:
          message.tick = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("timestamp"))
      throw $util.ProtocolError("missing required 'timestamp'", {
        instance: message
      });
    if (!message.hasOwnProperty("tick"))
      throw $util.ProtocolError("missing required 'tick'", {
        instance: message
      });
    return message;
  };

  return ProtoOATickData;
})();

/**
 * Open API application permission in regards to token ENUM.
 * @exports ProtoOAClientPermissionScope
 * @enum {string}
 * @property {number} SCOPE_VIEW=0 SCOPE_VIEW value
 * @property {number} SCOPE_TRADE=1 SCOPE_TRADE value
 */
$root.ProtoOAClientPermissionScope = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "SCOPE_VIEW")] = 0;
  values[(valuesById[1] = "SCOPE_TRADE")] = 1;
  return values;
})();

$root.ProtoOACtidProfile = (function() {
  /**
   * Properties of a ProtoOACtidProfile.
   * @exports IProtoOACtidProfile
   * @interface IProtoOACtidProfile
   * @property {Long} userId ProtoOACtidProfile userId
   */

  /**
   * Constructs a new ProtoOACtidProfile.
   * @exports ProtoOACtidProfile
   * @classdesc Trader profile entity. Empty due to GDPR.
   * @implements IProtoOACtidProfile
   * @constructor
   * @param {IProtoOACtidProfile=} [properties] Properties to set
   */
  function ProtoOACtidProfile(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOACtidProfile userId.
   * @member {Long} userId
   * @memberof ProtoOACtidProfile
   * @instance
   */
  ProtoOACtidProfile.prototype.userId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOACtidProfile instance using the specified properties.
   * @function create
   * @memberof ProtoOACtidProfile
   * @static
   * @param {IProtoOACtidProfile=} [properties] Properties to set
   * @returns {ProtoOACtidProfile} ProtoOACtidProfile instance
   */
  ProtoOACtidProfile.create = function create(properties) {
    return new ProtoOACtidProfile(properties);
  };

  /**
   * Encodes the specified ProtoOACtidProfile message. Does not implicitly {@link ProtoOACtidProfile.verify|verify} messages.
   * @function encode
   * @memberof ProtoOACtidProfile
   * @static
   * @param {IProtoOACtidProfile} message ProtoOACtidProfile message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOACtidProfile.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.userId);
    return writer;
  };

  /**
   * Decodes a ProtoOACtidProfile message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOACtidProfile
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOACtidProfile} ProtoOACtidProfile
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOACtidProfile.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOACtidProfile();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("userId"))
      throw $util.ProtocolError("missing required 'userId'", {
        instance: message
      });
    return message;
  };

  return ProtoOACtidProfile;
})();

$root.ProtoOACtidTraderAccount = (function() {
  /**
   * Properties of a ProtoOACtidTraderAccount.
   * @exports IProtoOACtidTraderAccount
   * @interface IProtoOACtidTraderAccount
   * @property {Long} ctidTraderAccountId ProtoOACtidTraderAccount ctidTraderAccountId
   * @property {boolean|null} [isLive] ProtoOACtidTraderAccount isLive
   * @property {Long|null} [traderLogin] ProtoOACtidTraderAccount traderLogin
   */

  /**
   * Constructs a new ProtoOACtidTraderAccount.
   * @exports ProtoOACtidTraderAccount
   * @classdesc Trader account entity.
   * @implements IProtoOACtidTraderAccount
   * @constructor
   * @param {IProtoOACtidTraderAccount=} [properties] Properties to set
   */
  function ProtoOACtidTraderAccount(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOACtidTraderAccount ctidTraderAccountId.
   * @member {Long} ctidTraderAccountId
   * @memberof ProtoOACtidTraderAccount
   * @instance
   */
  ProtoOACtidTraderAccount.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOACtidTraderAccount isLive.
   * @member {boolean} isLive
   * @memberof ProtoOACtidTraderAccount
   * @instance
   */
  ProtoOACtidTraderAccount.prototype.isLive = false;

  /**
   * ProtoOACtidTraderAccount traderLogin.
   * @member {Long} traderLogin
   * @memberof ProtoOACtidTraderAccount
   * @instance
   */
  ProtoOACtidTraderAccount.prototype.traderLogin = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOACtidTraderAccount instance using the specified properties.
   * @function create
   * @memberof ProtoOACtidTraderAccount
   * @static
   * @param {IProtoOACtidTraderAccount=} [properties] Properties to set
   * @returns {ProtoOACtidTraderAccount} ProtoOACtidTraderAccount instance
   */
  ProtoOACtidTraderAccount.create = function create(properties) {
    return new ProtoOACtidTraderAccount(properties);
  };

  /**
   * Encodes the specified ProtoOACtidTraderAccount message. Does not implicitly {@link ProtoOACtidTraderAccount.verify|verify} messages.
   * @function encode
   * @memberof ProtoOACtidTraderAccount
   * @static
   * @param {IProtoOACtidTraderAccount} message ProtoOACtidTraderAccount message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOACtidTraderAccount.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer
      .uint32(/* id 1, wireType 0 =*/ 8)
      .uint64(message.ctidTraderAccountId);
    if (message.isLive != null && message.hasOwnProperty("isLive"))
      writer.uint32(/* id 2, wireType 0 =*/ 16).bool(message.isLive);
    if (message.traderLogin != null && message.hasOwnProperty("traderLogin"))
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.traderLogin);
    return writer;
  };

  /**
   * Decodes a ProtoOACtidTraderAccount message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOACtidTraderAccount
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOACtidTraderAccount} ProtoOACtidTraderAccount
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOACtidTraderAccount.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOACtidTraderAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctidTraderAccountId = reader.uint64();
          break;
        case 2:
          message.isLive = reader.bool();
          break;
        case 3:
          message.traderLogin = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message
      });
    return message;
  };

  return ProtoOACtidTraderAccount;
})();

$root.ProtoOAAssetClass = (function() {
  /**
   * Properties of a ProtoOAAssetClass.
   * @exports IProtoOAAssetClass
   * @interface IProtoOAAssetClass
   * @property {Long|null} [id] ProtoOAAssetClass id
   * @property {string|null} [name] ProtoOAAssetClass name
   */

  /**
   * Constructs a new ProtoOAAssetClass.
   * @exports ProtoOAAssetClass
   * @classdesc Asset class entity.
   * @implements IProtoOAAssetClass
   * @constructor
   * @param {IProtoOAAssetClass=} [properties] Properties to set
   */
  function ProtoOAAssetClass(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAssetClass id.
   * @member {Long} id
   * @memberof ProtoOAAssetClass
   * @instance
   */
  ProtoOAAssetClass.prototype.id = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAssetClass name.
   * @member {string} name
   * @memberof ProtoOAAssetClass
   * @instance
   */
  ProtoOAAssetClass.prototype.name = "";

  /**
   * Creates a new ProtoOAAssetClass instance using the specified properties.
   * @function create
   * @memberof ProtoOAAssetClass
   * @static
   * @param {IProtoOAAssetClass=} [properties] Properties to set
   * @returns {ProtoOAAssetClass} ProtoOAAssetClass instance
   */
  ProtoOAAssetClass.create = function create(properties) {
    return new ProtoOAAssetClass(properties);
  };

  /**
   * Encodes the specified ProtoOAAssetClass message. Does not implicitly {@link ProtoOAAssetClass.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAssetClass
   * @static
   * @param {IProtoOAAssetClass} message ProtoOAAssetClass message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAssetClass.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.id != null && message.hasOwnProperty("id"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.id);
    if (message.name != null && message.hasOwnProperty("name"))
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
    return writer;
  };

  /**
   * Decodes a ProtoOAAssetClass message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAssetClass
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAssetClass} ProtoOAAssetClass
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAssetClass.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAssetClass();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  return ProtoOAAssetClass;
})();

$root.ProtoOADepthQuote = (function() {
  /**
   * Properties of a ProtoOADepthQuote.
   * @exports IProtoOADepthQuote
   * @interface IProtoOADepthQuote
   * @property {Long} id ProtoOADepthQuote id
   * @property {Long} size ProtoOADepthQuote size
   * @property {Long|null} [bid] ProtoOADepthQuote bid
   * @property {Long|null} [ask] ProtoOADepthQuote ask
   */

  /**
   * Constructs a new ProtoOADepthQuote.
   * @exports ProtoOADepthQuote
   * @classdesc Depth of market entity.
   * @implements IProtoOADepthQuote
   * @constructor
   * @param {IProtoOADepthQuote=} [properties] Properties to set
   */
  function ProtoOADepthQuote(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADepthQuote id.
   * @member {Long} id
   * @memberof ProtoOADepthQuote
   * @instance
   */
  ProtoOADepthQuote.prototype.id = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOADepthQuote size.
   * @member {Long} size
   * @memberof ProtoOADepthQuote
   * @instance
   */
  ProtoOADepthQuote.prototype.size = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOADepthQuote bid.
   * @member {Long} bid
   * @memberof ProtoOADepthQuote
   * @instance
   */
  ProtoOADepthQuote.prototype.bid = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOADepthQuote ask.
   * @member {Long} ask
   * @memberof ProtoOADepthQuote
   * @instance
   */
  ProtoOADepthQuote.prototype.ask = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * Creates a new ProtoOADepthQuote instance using the specified properties.
   * @function create
   * @memberof ProtoOADepthQuote
   * @static
   * @param {IProtoOADepthQuote=} [properties] Properties to set
   * @returns {ProtoOADepthQuote} ProtoOADepthQuote instance
   */
  ProtoOADepthQuote.create = function create(properties) {
    return new ProtoOADepthQuote(properties);
  };

  /**
   * Encodes the specified ProtoOADepthQuote message. Does not implicitly {@link ProtoOADepthQuote.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADepthQuote
   * @static
   * @param {IProtoOADepthQuote} message ProtoOADepthQuote message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADepthQuote.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.id);
    writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.size);
    if (message.bid != null && message.hasOwnProperty("bid"))
      writer.uint32(/* id 4, wireType 0 =*/ 32).uint64(message.bid);
    if (message.ask != null && message.hasOwnProperty("ask"))
      writer.uint32(/* id 5, wireType 0 =*/ 40).uint64(message.ask);
    return writer;
  };

  /**
   * Decodes a ProtoOADepthQuote message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADepthQuote
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADepthQuote} ProtoOADepthQuote
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADepthQuote.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADepthQuote();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 3:
          message.size = reader.uint64();
          break;
        case 4:
          message.bid = reader.uint64();
          break;
        case 5:
          message.ask = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("id"))
      throw $util.ProtocolError("missing required 'id'", { instance: message });
    if (!message.hasOwnProperty("size"))
      throw $util.ProtocolError("missing required 'size'", {
        instance: message
      });
    return message;
  };

  return ProtoOADepthQuote;
})();

/**
 * Error code ENUM.
 * @exports ProtoOAErrorCode
 * @enum {string}
 * @property {number} OA_AUTH_TOKEN_EXPIRED=1 OA_AUTH_TOKEN_EXPIRED value
 * @property {number} ACCOUNT_NOT_AUTHORIZED=2 ACCOUNT_NOT_AUTHORIZED value
 * @property {number} INCORRECT_BOUNDARIES=35 INCORRECT_BOUNDARIES value
 * @property {number} CONNECTIONS_LIMIT_EXCEEDED=67 CONNECTIONS_LIMIT_EXCEEDED value
 */
$root.ProtoOAErrorCode = (function() {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "OA_AUTH_TOKEN_EXPIRED")] = 1;
  values[(valuesById[2] = "ACCOUNT_NOT_AUTHORIZED")] = 2;
  values[(valuesById[35] = "INCORRECT_BOUNDARIES")] = 35;
  values[(valuesById[67] = "CONNECTIONS_LIMIT_EXCEEDED")] = 67;
  return values;
})();

module.exports = $root;
