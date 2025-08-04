"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "./auth-provider";
import { useRouter } from "next/navigation";
import Link from "next/link";

type AccountType = "fisica" | "juridica";

export function RegisterForm() {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<AccountType>("fisica");

  // comuns
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // pessoa física / MEI
  const [cpf, setCpf] = useState("");
  const [celular, setCelular] = useState("");
  const [mediaMovimentacao, setMediaMovimentacao] = useState("");
  const [frenteRGouCNH, setFrenteRGouCNH] = useState<File | null>(null);
  const [versoRGouCNH, setVersoRGouCNH] = useState<File | null>(null);

  // pessoa jurídica
  const [cnpj, setCnpj] = useState("");
  const [faturamentoMensal, setFaturamentoMensal] = useState("");
  const [identificacaoSolicitante, setIdentificacaoSolicitante] = useState("");
  const [cartaoCNPJ, setCartaoCNPJ] = useState<File | null>(null);
  const [contratoSocial, setContratoSocial] = useState<File | null>(null);

  // senha
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register } = useAuth();
  const router = useRouter();

  const handleFile = (setter: React.Dispatch<React.SetStateAction<File | null>>, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
    }
  };

  const canAdvanceStep1 = name.trim() !== "" && email.trim() !== "";
  const canAdvanceStep2 =
    accountType === "fisica"
      ? cpf.trim() !== "" && celular.trim() !== "" && mediaMovimentacao.trim() !== ""
      : cnpj.trim() !== "" && faturamentoMensal.trim() !== "" && identificacaoSolicitante.trim() !== "";

  const progressPercent = (() => {
    if (step === 1) return 25;
    if (step === 2) return 60;
    if (step === 3) return 100;
    return 0;
  })();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      if (step === 1 && canAdvanceStep1) setStep(2);
      else if (step === 2 && canAdvanceStep2) setStep(3);
      return;
    }

    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      setLoading(false);
      return;
    }

    // montar payload (mock)
    const payload: any = {
      accountType,
      name,
      email,
      password,
    };
    if (accountType === "fisica") {
      payload.cpf = cpf;
      payload.celular = celular;
      payload.mediaMovimentacao = mediaMovimentacao;
      payload.frenteRGouCNH = frenteRGouCNH?.name || null;
      payload.versoRGouCNH = versoRGouCNH?.name || null;
    } else {
      payload.cnpj = cnpj;
      payload.faturamentoMensal = faturamentoMensal;
      payload.identificacaoSolicitante = identificacaoSolicitante;
      payload.cartaoCNPJ = cartaoCNPJ?.name || null;
      payload.contratoSocial = contratoSocial?.name || null;
    }

    const { error: registerError } = await register(email, password, name);
    if (registerError) {
      setError(registerError);
    } else {
      router.push("/dashboard");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <Card className="w-full">
        <CardHeader>
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <div>
                <CardTitle className="text-2xl font-bold">Criar Conta</CardTitle>
                <CardDescription className="mt-0">
                  Etapa {step} de 3
                </CardDescription>
              </div>
              <div className="text-sm font-medium">
                {step === 1 && "Conta"}
                {step === 2 && "Documentação"}
                {step === 3 && "Senha & Revisão"}
              </div>
            </div>

            {/* barra de progresso */}
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 bg-primary transition-all"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* etapa 1 */}
            {step === 1 && (
              <>
                <div className="flex gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setAccountType("fisica")}
                    className={`px-4 py-2 rounded-full border text-sm font-medium ${
                      accountType === "fisica" ? "bg-primary text-white" : "bg-white"
                    }`}
                  >
                    Pessoa Física / MEI
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccountType("juridica")}
                    className={`px-4 py-2 rounded-full border text-sm font-medium ${
                      accountType === "juridica" ? "bg-primary text-white" : "bg-white"
                    }`}
                  >
                    Pessoa Jurídica
                  </button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">{accountType === "fisica" ? "Nome Completo" : "Razão Social"}</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={accountType === "fisica" ? "Seu nome completo" : "Razão social da empresa"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </>
            )}

            {/* etapa 2 */}
            {step === 2 && (
              <>
                {accountType === "fisica" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cpf">CPF</Label>
                        <Input
                          id="cpf"
                          type="text"
                          placeholder="000.000.000-00"
                          value={cpf}
                          onChange={(e) => setCpf(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="celular">Celular</Label>
                        <Input
                          id="celular"
                          type="text"
                          placeholder="(XX) XXXXX-XXXX"
                          value={celular}
                          onChange={(e) => setCelular(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mediaMovimentacao">Média de movimentação do mês</Label>
                      <Input
                        id="mediaMovimentacao"
                        type="text"
                        placeholder="Ex: R$ 10.000"
                        value={mediaMovimentacao}
                        onChange={(e) => setMediaMovimentacao(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="frente">Foto frente do RG ou CNH</Label>
                        <Input
                          id="frente"
                          type="file"
                          onChange={(e) => handleFile(setFrenteRGouCNH, e)}
                          accept="image/*"
                        />
                        {frenteRGouCNH && <div className="text-xs">{frenteRGouCNH.name}</div>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="verso">Foto verso do RG ou CNH</Label>
                        <Input
                          id="verso"
                          type="file"
                          onChange={(e) => handleFile(setVersoRGouCNH, e)}
                          accept="image/*"
                        />
                        {versoRGouCNH && <div className="text-xs">{versoRGouCNH.name}</div>}
                      </div>
                    </div>
                  </>
                )}
                {accountType === "juridica" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cnpj">CNPJ</Label>
                        <Input
                          id="cnpj"
                          type="text"
                          placeholder="00.000.000/0000-00"
                          value={cnpj}
                          onChange={(e) => setCnpj(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="celular-j">Celular</Label>
                        <Input
                          id="celular-j"
                          type="text"
                          placeholder="(XX) XXXXX-XXXX"
                          value={celular}
                          onChange={(e) => setCelular(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="faturamento">Faturamento mensal</Label>
                      <Input
                        id="faturamento"
                        type="text"
                        placeholder="Ex: R$ 50.000"
                        value={faturamentoMensal}
                        onChange={(e) => setFaturamentoMensal(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="identificacao">Identificação do solicitante</Label>
                      <Input
                        id="identificacao"
                        type="text"
                        placeholder="Nome / cargo"
                        value={identificacaoSolicitante}
                        onChange={(e) => setIdentificacaoSolicitante(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="media-j">Média de movimentação do mês</Label>
                      <Input
                        id="media-j"
                        type="text"
                        placeholder="Ex: R$ 120.000"
                        value={mediaMovimentacao}
                        onChange={(e) => setMediaMovimentacao(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cartaoCNPJ">Cartão do CNPJ</Label>
                        <Input
                          id="cartaoCNPJ"
                          type="file"
                          onChange={(e) => handleFile(setCartaoCNPJ, e)}
                          accept="image/*,.pdf"
                        />
                        {cartaoCNPJ && <div className="text-xs">{cartaoCNPJ.name}</div>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contratoSocial">Contrato social</Label>
                        <Input
                          id="contratoSocial"
                          type="file"
                          onChange={(e) => handleFile(setContratoSocial, e)}
                          accept=".pdf,image/*"
                        />
                        {contratoSocial && <div className="text-xs">{contratoSocial.name}</div>}
                      </div>
                    </div>
                  </>
                )}
              </>
            )}

            {/* etapa 3 */}
            {step === 3 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirme sua senha"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded border text-sm">
                  <div className="font-semibold mb-2">Revisão</div>
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <strong>Tipo:</strong> {accountType === "fisica" ? "Pessoa Física / MEI" : "Pessoa Jurídica"}
                    </div>
                    <div>
                      <strong>Nome/Razão:</strong> {name || "-"}
                    </div>
                    <div>
                      <strong>Email:</strong> {email || "-"}
                    </div>
                    {accountType === "fisica" && (
                      <>
                        <div>
                          <strong>CPF:</strong> {cpf || "-"}
                        </div>
                        <div>
                          <strong>Celular:</strong> {celular || "-"}
                        </div>
                        <div>
                          <strong>Média de movimentação:</strong> {mediaMovimentacao || "-"}
                        </div>
                      </>
                    )}
                    {accountType === "juridica" && (
                      <>
                        <div>
                          <strong>CNPJ:</strong> {cnpj || "-"}
                        </div>
                        <div>
                          <strong>Faturamento:</strong> {faturamentoMensal || "-"}
                        </div>
                        <div>
                          <strong>Solicitante:</strong> {identificacaoSolicitante || "-"}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex justify-between items-center mt-2">
              <div>
                {step > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setStep((s) => Math.max(1, s - 1))}
                    disabled={loading}
                  >
                    Voltar
                  </Button>
                )}
              </div>
              <div className="flex gap-2">
                {step < 3 && (
                  <Button
                    onClick={() => {
                      if (step === 1 && canAdvanceStep1) setStep(2);
                      if (step === 2 && canAdvanceStep2) setStep(3);
                    }}
                    disabled={
                      (step === 1 && !canAdvanceStep1) ||
                      (step === 2 && !canAdvanceStep2) ||
                      loading
                    }
                  >
                    Próximo
                  </Button>
                )}
                {step === 3 && (
                  <Button type="submit" disabled={loading}>
                    {loading ? "Criando..." : "Criar conta"}
                  </Button>
                )}
              </div>
            </div>

            <div className="text-center text-sm mt-4">
              Já tem uma conta?{" "}
              <Link href="/auth/login" className="text-primary hover:underline">
                Fazer login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
