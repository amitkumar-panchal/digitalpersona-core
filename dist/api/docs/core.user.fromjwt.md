<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@digitalpersona/core](./core.md) &gt; [User](./core.user.md) &gt; [fromJWT](./core.user.fromjwt.md)

## User.fromJWT() method

Creates a user object using claims in a JSON Web Token.

<b>Signature:</b>

```typescript
static fromJWT(token: JSONWebToken, type?: UserNameType): User;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  token | <code>JSONWebToken</code> | a JSON Web Token. |
|  type | <code>UserNameType</code> | an optional username type to override automatic type detection and force a specific name format. |

<b>Returns:</b>

`User`

a user object constructed from the `token` claims.

## Remarks

The `token` should contain either [\`sub\`](./core.claimset.sub.md) or [\`wan\`](./core.claimset.wan.md) claim to detect a user name. If no such claims are found, then [anonymous](./core.user.anonymous.md) user is returned. The [\`sub\`](./core.claimset.sub.md) claim has a priority over the [\`wan\`](./core.claimset.wan.md) claim. If `type` parameter is not defined, the name type is deduced automatically from the name string. You may provide a `type` parameter if you want to enforce a specific name type. See  for type deduction details.

