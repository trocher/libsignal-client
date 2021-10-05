//
// Copyright 2021 Signal Messenger, LLC.
// SPDX-License-Identifier: AGPL-3.0-only
//

import * as Native from './Native';
// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const NativeImpl = require('node-gyp-build')(
  __dirname + '/../..'
) as typeof Native;

export class ProtocolAddress {
  readonly _nativeHandle: Native.ProtocolAddress;

  private constructor(handle: Native.ProtocolAddress) {
    this._nativeHandle = handle;
  }

  static _fromNativeHandle(handle: Native.ProtocolAddress): ProtocolAddress {
    return new ProtocolAddress(handle);
  }

  static new(name: string, deviceId: number): ProtocolAddress {
    return new ProtocolAddress(NativeImpl.ProtocolAddress_New(name, deviceId));
  }

  name(): string {
    return NativeImpl.ProtocolAddress_Name(this);
  }

  deviceId(): number {
    return NativeImpl.ProtocolAddress_DeviceId(this);
  }
}