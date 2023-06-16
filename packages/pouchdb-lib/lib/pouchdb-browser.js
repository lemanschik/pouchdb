import PouchDB from './pouchdb-core.js';
export { default } from './pouchdb-core.js';
import IDBPouch from './pouchdb-adapter-idb.js';
import mapreduce from './pouchdb-mapreduce.js';
import replication from './pouchdb-replication.js';
import 'node:events';
import './fetch-148a5ead.js';
import 'stream';
import 'http';
import 'url';
import './abort-controller-08d1ea45.js';
import 'punycode';
import './_commonjsHelpers-24198af3.js';
import 'util';
import 'https';
import 'zlib';
import './v4-b7ee9c0c.js';
import './pick-60e95b5a.js';
import './nextTick-ea093886.js';
import './clone-9d9f421b.js';
import './index-15c7260a.js';
import 'buffer';
import './functionName-97119de9.js';
import './guardedConsole-f54e5a40.js';
import './invalidIdError-d6c03c27.js';
import './isRemote-2533b7cb.js';
import './upsert-331b6913.js';
import './rev-5211ac7a.js';
import 'crypto';
import './once-de8350b9.js';
import './collectConflicts-ad0b7c70.js';
import './rootToLeaf-f8d0e78a.js';
import './isLocalId-d067de54.js';
import './pouchdb-platform.js';
import 'node:assert';
import 'node:fs';
import 'node:buffer';
import 'node:crypto';
import 'node:stream';
import 'node:http';
import 'node:url';
import 'node:https';
import 'node:zlib';
import 'node:util';
import 'node:vm';
import 'node:path';
import 'node:os';
import './findPathToLeaf-7e69c93c.js';
import 'pouchdb-utils.js';
import './pouchdb-changes-filter.js';
import './normalizeDdocFunctionName-ea3481cf.js';
import './matches-selector-96146c79.js';
import './index-618b2bca.js';
import 'vm';
import './index-f8a9e0ec.js';
import './latest-0521537f.js';
import './parseDoc-67781d71.js';
import './preprocessAttachments-24086c35.js';
import './binaryStringToBlobOrBuffer-39ece35b.js';
import './typedBuffer-a8220a49.js';
import './binaryMd5-601b2421.js';
import './processDocs-f320a035.js';
import './merge-1e46cced.js';
import './revExists-12209d1c.js';
import './safeJsonStringify-6520e306.js';
import './base64StringToBlobOrBuffer-3fd03be6.js';
import './readAsBinaryString-06e911ba.js';
import './changesHandler-c020580c.js';
import './filterChange-0090dde4.js';
import './toPromise-05472f25.js';
import './index-d4058820.js';
import './flatten-994f45c6.js';
import './pouchdb-crypto.js';
import './index-cffd0bb5.js';
import './pouchdb-checkpointer.js';
import './defaultBackOff-55b856e3.js';
import './pouchdb-generate-replication-id.js';

PouchDB.plugin(IDBPouch)
  //.plugin(HttpPouch)
  .plugin(mapreduce)
  .plugin(replication);
