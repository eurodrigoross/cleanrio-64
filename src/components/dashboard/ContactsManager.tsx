import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Edit, 
  Trash2, 
  CheckCircle, 
  Clock, 
  MessageCircle,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Filter
} from "lucide-react";
// import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Contact {
  id: string;
  name: string;
  phone: string;
  service_type: string;
  service_size: string;
  scheduled_date: string;
  scheduled_time: string;
  address: string;
  payment_method: string;
  total_price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  created_at: string;
}

export const ContactsManager = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [editNotes, setEditNotes] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const { toast } = useToast();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      // Dados demo até conectar o Supabase
      const mockContacts: Contact[] = [
        {
          id: "1",
          name: "João Silva",
          phone: "(21) 99999-9999",
          service_type: "Higienização de Sofá",
          service_size: "3 Lugares",
          scheduled_date: "2024-01-15",
          scheduled_time: "09:00 - 11:00",
          address: "Rua das Flores, 123, Copacabana, Rio de Janeiro - RJ",
          payment_method: "PIX",
          total_price: 250,
          status: "pending",
          notes: "Cliente prefere horário da manhã",
          created_at: "2024-01-10T10:00:00Z"
        },
        {
          id: "2", 
          name: "Maria Santos",
          phone: "(21) 88888-8888",
          service_type: "Higienização de Carro",
          service_size: "Médio - Interna Completa",
          scheduled_date: "2024-01-16",
          scheduled_time: "13:00 - 15:00",
          address: "Av. Atlântica, 456, Ipanema, Rio de Janeiro - RJ",
          payment_method: "Cartão",
          total_price: 330,
          status: "confirmed",
          notes: "",
          created_at: "2024-01-11T14:30:00Z"
        }
      ];
      
      setContacts(mockContacts);
    } catch (error) {
      console.error('Erro ao buscar contatos:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os contatos",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (contactId: string, newStatus: Contact['status']) => {
    try {
      // Simular atualização no estado local (demo)
      setContacts(prev => 
        prev.map(contact => 
          contact.id === contactId 
            ? { ...contact, status: newStatus }
            : contact
        )
      );

      toast({
        title: "Sucesso",
        description: `Status atualizado para ${getStatusLabel(newStatus)}`,
      });
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o status",
        variant: "destructive"
      });
    }
  };

  const updateContactNotes = async (contactId: string, notes: string) => {
    try {
      // Simular atualização no estado local (demo)
      setContacts(prev => 
        prev.map(contact => 
          contact.id === contactId 
            ? { ...contact, notes }
            : contact
        )
      );

      toast({
        title: "Sucesso",
        description: "Anotações salvas com sucesso",
      });
    } catch (error) {
      console.error('Erro ao salvar anotações:', error);
      toast({
        title: "Erro",
        description: "Não foi possível salvar as anotações",
        variant: "destructive"
      });
    }
  };

  const deleteContact = async (contactId: string) => {
    try {
      // Simular exclusão no estado local (demo)
      setContacts(prev => prev.filter(contact => contact.id !== contactId));
      
      toast({
        title: "Sucesso",
        description: "Contato excluído com sucesso",
      });
    } catch (error) {
      console.error('Erro ao excluir contato:', error);
      toast({
        title: "Erro",
        description: "Não foi possível excluir o contato",
        variant: "destructive"
      });
    }
  };

  const sendToWhatsApp = (contact: Contact) => {
    const message = `*AGENDAMENTO CONFIRMADO* ✅

*Cliente:* ${contact.name}
*Telefone:* ${contact.phone}
*Serviço:* ${contact.service_type} - ${contact.service_size}
*Data:* ${new Date(contact.scheduled_date).toLocaleDateString('pt-BR')}
*Horário:* ${contact.scheduled_time}
*Endereço:* ${contact.address}
*Pagamento:* ${contact.payment_method}
*Valor:* R$ ${contact.total_price?.toFixed(2)}

${contact.notes ? `*Observações:* ${contact.notes}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5521991612893?text=${encodedMessage}`, '_blank');
  };

  const getStatusBadge = (status: Contact['status']) => {
    const variants = {
      pending: { variant: "secondary" as const, label: "Pendente", color: "text-orange-600" },
      confirmed: { variant: "default" as const, label: "Confirmado", color: "text-green-600" },
      completed: { variant: "outline" as const, label: "Concluído", color: "text-blue-600" },
      cancelled: { variant: "destructive" as const, label: "Cancelado", color: "text-red-600" }
    };
    
    const config = variants[status] || variants.pending;
    return <Badge variant={config.variant} className={config.color}>{config.label}</Badge>;
  };

  const getStatusLabel = (status: Contact['status']) => {
    const labels = {
      pending: "Pendente",
      confirmed: "Confirmado", 
      completed: "Concluído",
      cancelled: "Cancelado"
    };
    return labels[status] || "Pendente";
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const filteredContacts = contacts.filter(contact => 
    statusFilter === "all" || contact.status === statusFilter
  );

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-muted rounded w-1/3"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded"></div>
                <div className="h-3 bg-muted rounded w-3/4"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Gerenciar Contatos
          </CardTitle>
          <CardDescription>
            Todos os contatos recebidos via quiz da página principal
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Filtros */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <Filter className="h-4 w-4" />
            <Label>Filtrar por status:</Label>
            <div className="flex gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("all")}
              >
                Todos ({contacts.length})
              </Button>
              <Button
                variant={statusFilter === "pending" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("pending")}
              >
                Pendentes ({contacts.filter(c => c.status === 'pending').length})
              </Button>
              <Button
                variant={statusFilter === "confirmed" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("confirmed")}
              >
                Confirmados ({contacts.filter(c => c.status === 'confirmed').length})
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de contatos */}
      <div className="space-y-4">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {contact.phone}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(contact.status)}
                    <span className="text-sm text-muted-foreground">
                      {new Date(contact.created_at).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{contact.service_type}</Badge>
                      <span className="text-sm">{contact.service_size}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(contact.scheduled_date).toLocaleDateString('pt-BR')} às {contact.scheduled_time}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {contact.address}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-bold text-primary">
                        {formatCurrency(contact.total_price)}
                      </span>
                      <Badge variant="outline">{contact.payment_method}</Badge>
                    </div>
                    
                    {contact.notes && (
                      <div className="p-2 bg-muted rounded-md">
                        <p className="text-sm">{contact.notes}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateContactStatus(contact.id, 'confirmed')}
                    disabled={contact.status === 'confirmed'}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Confirmar
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateContactStatus(contact.id, 'pending')}
                    disabled={contact.status === 'pending'}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Pendente
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingContact(contact);
                          setEditNotes(contact.notes || "");
                        }}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Anotações
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Anotações - {contact.name}</DialogTitle>
                        <DialogDescription>
                          Adicione observações importantes sobre este contato
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Digite suas anotações aqui..."
                          value={editNotes}
                          onChange={(e) => setEditNotes(e.target.value)}
                          rows={4}
                        />
                        
                        <div className="flex gap-2">
                          <Button
                            onClick={() => {
                              updateContactNotes(contact.id, editNotes);
                              setEditingContact(null);
                            }}
                          >
                            Salvar
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setEditingContact(null)}
                          >
                            Cancelar
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    size="sm"
                    onClick={() => sendToWhatsApp(contact)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Excluir
                      </Button>
                    </AlertDialogTrigger>
                    
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                        <AlertDialogDescription>
                          Tem certeza que deseja excluir o contato de {contact.name}? 
                          Esta ação não pode ser desfeita.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => deleteContact(contact.id)}
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          Excluir
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="text-center py-8">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">
                {statusFilter === "all" 
                  ? "Nenhum contato encontrado ainda"
                  : `Nenhum contato com status "${getStatusLabel(statusFilter as Contact['status'])}" encontrado`
                }
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};