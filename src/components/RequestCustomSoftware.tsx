import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Define form validation schema
const requestFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  projectDescription: z.string().min(10, { message: 'Project description must be at least 10 characters.' }),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

type RequestFormValues = z.infer<typeof requestFormSchema>;

export function RequestCustomSoftware() {
  const [open, setOpen] = React.useState(false);
  
  // Initialize form
  const form = useForm<RequestFormValues>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectDescription: '',
      budget: '',
      timeline: '',
    },
  });

  function onSubmit(data: RequestFormValues) {
    // Here you would typically send the data to your backend
    console.log(data);
    
    // Show success message
    toast.success('Request submitted successfully! We will contact you soon.');
    
    // Close the dialog
    setOpen(false);
    
    // Reset the form
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          className="group relative overflow-hidden py-2.5 px-6 rounded-full border border-primary/20 hover:border-primary/50 transition-all duration-300"
        >
          <span className="relative z-10 font-medium tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/70 via-primary to-primary/80 animate-fade-in-up opacity-0" 
                 style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Request Custom Software
            </span>
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary/50 rounded-full group-hover:w-full transition-all duration-700 ease-custom-bezier"></span>
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-primary/10 transition-all duration-300 animate-shimmer"></div>
          <div className="absolute -inset-px rounded-full opacity-0 group-hover:opacity-30 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-border-pulse"></div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">Request Custom Software</DialogTitle>
          <DialogDescription>
            Fill out the form below to request a custom software solution for your business.
            We'll get back to you within 48 hours.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email address" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your company name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your project requirements in detail..." 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Include information about features, purpose, and any specific technologies needed.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your budget range" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Timeline (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Expected timeline" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <DialogFooter className="pt-4">
              <Button type="submit" className="w-full">Submit Request</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
} 