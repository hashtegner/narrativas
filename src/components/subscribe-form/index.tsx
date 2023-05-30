'use client';

import { FormEventHandler } from "react"

export default function SubscribeForm() {
  return (
    <form action="https://tinyletter.com/narrativas" className="mb-6 is-flex is-flex-direction-column is-align-items-center" method="post" target="_blank">
      <input type="hidden" value="1" name="embed" />
      <p className="mb-2 has-text-centered">
        Cadastre-se abaixo para receber histórias futuras no seu e-mail
      </p>
      <div className="field has-addons">
        <div className="control">
          <input type="email" name="email" className="input is-rounded" placeholder="Preencha seu e-mail..."  required />
        </div>

        <div className="control">
          <input type="submit" className="button is-rounded" value="Cadastrar" />
        </div>
      </div>
    </form>
  )
}
